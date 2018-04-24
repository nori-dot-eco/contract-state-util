import React, { Component } from 'react';
import SimpleTable from './SimpleTable';
import PropTypes from 'prop-types';
import getState from '../index';
import { Wallet, web3 } from '../lib/contracts';

class App extends Component {
  state = {
    contractStates: null,
  };

  componentWillMount() {
    const contractState = Wallet.getContractState();
    this.setState({
      contractStates: contractState,
    });
    this.updateBlockchainState();
    console.debug('mounted');
  }

  updateBlockchainState = () => {
    // const contractState = Wallet.getContractState();
    // this.setState({});
    console.debug('updating blockchain');
    // const contractState = Wallet.getContractState();
    // this.setState({
    //   contractStates: contractState,
    // });

    clearTimeout(this.updateTimeout);

    this.forceUpdate();
    this.updateTimeout = setTimeout(this.updateBlockchainState, 3000);

    console.debug('done updating blockchain');
  };

  componentWillUnmount() {
    console.debug('unmount');
    clearTimeout(this.updateTimeout);
  }
  // componentDidUpdate() {
  //   this.setState({
  //     contractStates: Wallet.getContractState(),
  //   });
  //   // this.forceUpdate();
  // }
  render() {
    console.log('in index render');
    return (
      <div className="App">
        <div>
          <header className="App-header">
            <h1 className="App-title">Contract States</h1>
          </header>
        </div>
        <div>
          <SimpleTable contractStates={Wallet.getContractState()} />
        </div>
      </div>
    );
  }
}

export default App;
