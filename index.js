import { Wallet, web3 } from './lib/contracts';

export const getState = async () => {
  const contractStates = Wallet.getContractState();

  for (const { contractName: c, state: s } of contractStates) {
    console.log('Contract Name: ', c);
    for (let i = 0; i < s.length; i++) {
      console.log(
        'Name:',
        s[i].name,
        '| Type:',
        s[i].type,
        '| Value:',
        await s[i].value
      );
    }
    console.log('----');
  }
};

getState();
