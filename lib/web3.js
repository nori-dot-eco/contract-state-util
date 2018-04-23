import Web3 from 'web3';

let _web3;
export function setupWeb3() {
  if (typeof _web3 !== 'undefined') {
    _web3 = new Web3(_web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    _web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:9545'));
  }
  global.web3 = _web3;
}
