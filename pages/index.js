import React, { Component } from 'react';
import SimpleTable from './SimpleTable';
import { Wallet } from '../lib/contracts';

class App extends Component {
  componentWillMount() {
    this.updateBlockchainState();
  }

  updateBlockchainState = () => {
    console.debug('checking for updates from blockchain');
    clearTimeout(this.updateTimeout);
    this.forceUpdate();
    this.updateTimeout = setTimeout(this.updateBlockchainState, 12000);
    console.debug('done checking for updates/updating from blockchain');
  };

  componentWillUnmount() {
    clearTimeout(this.updateTimeout);
  }

  render() {
    return (
      <div style={{ minWidth: '100%' }}>
        <div>
          <header>
            <h1>Contract States</h1>
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
