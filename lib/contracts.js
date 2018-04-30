import contract from 'truffle-contract';
import { setupWeb3 } from './web3';
import * as artifacts from './artifacts';

const contracts = {};

Object.entries(artifacts).forEach(([key, artifact]) => {
  console.log(key);
  contracts[key] = contract(artifact);
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

  static getContractState() {
    let stateNamesAndVals = [];
    const contractStates = [];
    Object.values(contracts).forEach(_contract => {
      Object.values(_contract.abi).forEach(async abi => {
        if (abi.type === 'function' && abi.constant) {
          try {
            const stateValue = this.contractFunc(
              `${_contract.contractName}.${abi.name}`
            )();

            stateNamesAndVals.push({
              name: abi.name,
              type: abi.outputs[0].type,
              value: await stateValue,
            });
          } catch (e) {
            console.log(e);
          }
        }
      });
      contractStates.push(
        Object.create({
          contractName: _contract.contractName,
          state: stateNamesAndVals,
        })
      );
      stateNamesAndVals = [];
    });

    return contractStates;
  }
}
