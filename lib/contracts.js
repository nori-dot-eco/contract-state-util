import contract from 'truffle-contract';
import StatesArtifact from '../build/contracts/States.json';
import MoreStatesArtifact from '../build/contracts/MoreStates.json';
import { setupWeb3 } from './web3';
import truffleConfig from '../truffle';
import { promisify } from 'es6-promisify';

const States = contract(StatesArtifact);
const MoreStates = contract(MoreStatesArtifact);
const contracts = {
  States,
  MoreStates,
};

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
    // if (args){
    //   const [Contract, cid] = await Promise.all([
    //     Wallet.getContract(contractName)
    //   ]);

    // }
    const Contract = await Wallet.getContract(contractName);
    // Contract[funcName].call().then(i => i)
    // const val = await Contract[funcName].call();
    // console.log('val', val);
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
            // const b = await stateValue;
            // console.log('tryna log sv', b);

            stateNamesAndVals.push({
              name: abi.name,
              type: abi.outputs[0].type,
              value: await stateValue,
            });
            // console.log('dsfsdf');
          } catch (e) {
            console.log(e);
          }
        }
        // return stateNamesAndVals;
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
