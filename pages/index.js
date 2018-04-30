import React, { Component } from 'react';
import SimpleTable from './SimpleTable';
import { Wallet } from '../lib/contracts';

class App extends Component {
  componentWillMount() {
    this.updateBlockchainState();
  }

  updateBlockchainState = () => {
    console.debug('updating blockchain');
    clearTimeout(this.updateTimeout);
    this.forceUpdate();
    this.updateTimeout = setTimeout(this.updateBlockchainState, 3000);
    console.debug('done updating blockchain');
  };

  componentWillUnmount() {
    clearTimeout(this.updateTimeout);
  }

  render() {
    return (
      <div className="App" style={{ width: '100%' }}>
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
