import { Wallet, web3 } from './lib/contracts';

const state = [];

const getState = () => {
  const contractStates = Wallet.getContractState();
  console.log(contractStates);
  // contractStates.map(c => {
  //   console.log('c', { c });
  // });

  // for (const { contractName: c, state: s } of contractStates) {
  //   console.log('Contract Name: ', c);
  //   for (let i = 0; i < s.length; i++) {
  //     console.log(
  //       'Name:',
  //       s[i].name,
  //       '| Type:',
  //       s[i].type,
  //       '| Value:',
  //       await s[i].value
  //     );
  //   }
  //   console.log('----');
  // }
  // await contractStates;
  return Wallet.getContractState();
};

export default getState;
// getState();
