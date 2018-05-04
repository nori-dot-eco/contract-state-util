import deepFilter from 'deep-filter-object';
import contract from 'truffle-contract';
import { setupWeb3 } from './web3';
import * as artifacts from './artifacts';

const contracts = {};

Object.entries(artifacts).forEach(([key, artifact]) => {
  const {
    ast: { nodes },
  } = artifact;
  const contractDependencies = nodes[nodes.length - 1].contractDependencies;
  contracts[key] = contract(artifact);
  contracts[key].contractDependencies = contractDependencies;
  contracts[key].id = artifact.ast.id - 1;
  return contracts;
});

export const web3 = setupWeb3();

const providerPromise = new Promise((resolve, reject) => {
  function setProviders() {
    if (global.web3) {
      Object.values(contracts).forEach(_contract => {
        _contract.setProvider(global.web3.currentProvider);
      });
      resolve({ contracts });
    } else {
      console.log(
        'no web3 available in browser. Metamask probably not installed'
      );
      reject(
        new Error(
          'no web3 available in browser. Metamask probably not installed'
        )
      );
    }
  }
  if (process.browser) {
    console.log('process.brows: ');
    if (global.document.readyState === 'complete') {
      setProviders();
    } else {
      global.addEventListener('load', setProviders);
    }
    setTimeout(() => {
      reject(new Error('timed out waiting for load event to trigger'));
    }, 5000);
  } else {
    setProviders();
    // resolve({ contracts });
  }
});

export async function getNetworkId() {
  return new Promise((resolve, reject) => {
    web3.version.getNetwork((error, networkId) => {
      if (error) {
        reject(error);
      } else {
        resolve(networkId);
      }
    });
  });
}

export async function getEtherscanURL(path) {
  const networkId = await getNetworkId();

  return `https://etherscan.io${path}`;
}

export class Wallet {
  static async withAddress(address) {
    const wallet = new Wallet(address);
    await wallet.update();
    return wallet;
  }
  static async getDefault() {
    const accounts = await Wallet.getEthAccounts();
    return Wallet.withAddress(accounts[0]);
  }
  static getEthAccounts() {
    return new Promise((resolve, reject) => {
      web3.eth.getAccounts((err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  static async getContract(contractName) {
    await providerPromise;
    return contracts[contractName].deployed();
  }

  getContractAddress = async contractName => {
    const _contract = await Wallet.getContract(contractName);
    return _contract.address;
  };

  static contractFunc = contractDotFunc => async (...args) => {
    const [contractName, funcName] = contractDotFunc.split('.');
    const Contract = await Wallet.getContract(contractName);
    return args ? Contract[funcName](...args) : Contract[funcName].call();
  };

  constructor(address) {
    this.address = address;
  }

  async update() {}

  static isEmpty(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }
  static getContractById(_id) {
    let foundId;
    let ret;
    Object.entries(contracts).forEach(e => {
      foundId = deepFilter(e, (value, key, obj) => {
        if (obj[key].id === _id) {
          ret = e[key];
        }
      });
    });
    return ret;
  }

  static getContractState() {
    let stateNamesAndVals = [];
    const contractStates = [];
    let baseStateNamesAndVals = [];

    Object.values(contracts).forEach(_contract => {
      Object.values(_contract.abi).forEach(async abi => {
        if (
          !this.isEmpty(_contract.networks) &&
          (abi.constant === true && abi.type === 'function')
        ) {
          try {
            const stateValue =
              abi.inputs.length > 0
                ? this.contractFunc(`${_contract.contractName}.${abi.name}`)(
                    ...this.mockInput(abi.inputs)
                  )
                : this.contractFunc(`${_contract.contractName}.${abi.name}`)();

            stateNamesAndVals.push({
              name: abi.name,
              type: abi.outputs[0].type,
              inputs: JSON.stringify(
                deepFilter(abi.inputs, (value, key, obj) => obj[key] !== '')
              ),
              value:
                abi.inputs.length > 0
                  ? `${await stateValue} ***`
                  : await stateValue,
            });
          } catch (e) {
            // console.log(_contract.contractName, abi.name, e);
          }
        }
      });

      // SEMI functional base contract state fetching
      if (!this.isEmpty(_contract.networks)) {
        const baseContractsFromIds = [];

        _contract.contractDependencies.map(baseContractId =>
          baseContractsFromIds.push(this.getContractById(baseContractId))
        );
        if (_contract.contractDependencies.length > 0) {
          baseContractsFromIds.map(bc => {
            Object.values(bc.abi).forEach(async babi => {
              if (
                !this.isEmpty(_contract.networks) &&
                (babi.constant === true && babi.type === 'function')
              ) {
                try {
                  const stateValue =
                    babi.inputs.length > 0
                      ? this.contractFunc(
                          `${_contract.contractName}.${babi.name}`
                        )(...this.mockInput(babi.inputs))
                      : this.contractFunc(
                          `${_contract.contractName}.${babi.name}`
                        )();

                  baseStateNamesAndVals.push({
                    name: babi.name,
                    type: babi.outputs[0].type,
                    inputs: JSON.stringify(
                      deepFilter(
                        babi.inputs,
                        (value, key, obj) => obj[key] !== ''
                      )
                    ),
                    value:
                      babi.inputs.length > 0
                        ? `${await stateValue} ***`
                        : await stateValue,
                    outputs: babi.outputs,
                  });
                } catch (e) {
                  // console.log(bc.contractName, babi.name, e);
                }
              }
            });
          });
        }
        contractStates.push(
          Object.create({
            contractName: _contract.contractName,
            contractId: _contract.id,
            state: stateNamesAndVals,
            baseContracts: {
              baseContractsFromIds,
              state: baseStateNamesAndVals,
            },
          })
        );
        stateNamesAndVals = [];
        baseStateNamesAndVals = [];
      }
    });
    return contractStates;
  }

  static mockInput(type) {
    const arg = [];
    for (let i = 0; i < type.length; i++) {
      if (type[i].type.includes('int')) {
        arg[i] = 0;
      } else if (type[i].type.includes('bytes')) {
        arg[i] = '';
      } else if (type[i].type === 'address') {
        arg[i] = 0x0;
      } else if (type[i].type === 'bool') {
        arg[i] = true;
      }
    }
    const args = arg.map(_arg => [_arg]);
    return args;
  }
}
