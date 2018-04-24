import React, { Component } from 'react';
import SimpleTable from './SimpleTable';
import PropTypes from 'prop-types';
import getState from '../index';
import { Wallet, web3 } from '../lib/contracts';

class App extends Component {
  state = {
    contractStates: null,
  };

  async componentWillMount() {
    const contractState = await Wallet.getContractState();
    await this.setState({
      contractStates: contractState,
    });
    console.log('mounted', this.state.contractStates);
    await this.forceUpdate();
  }
  logStates = async () => {
    console.log(this.state.contractStates);
    for (const { contractName: c, state: s } of this.state.contractStates) {
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

  render() {
    const contractStates = this.state.contractStates;
    // if (this.state.contractStates) {
    //    contractStates  = this.state.contractStates;
    //   console.log(contractStates);
    //   // this.logStates();
    // }
    // console.log('rendering', this.state.contractStates);

    return (
      contractStates && (
        <div className="App">
          <div>
            <header className="App-header">
              <h1 className="App-title">Contract States</h1>
            </header>
          </div>
          <div>
            {contractStates && <SimpleTable contractStates={contractStates} />}
          </div>
        </div>
      )
    );
  }
}

export default App;
