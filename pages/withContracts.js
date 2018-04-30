import { lifecycle } from 'recompose';
import { Wallet, web3 } from '../lib/contracts';

const withContracts = (contractNames, callback, interval = 5000) =>
  lifecycle({
    async componentWillMount() {
      console.log('hoc will mount');
      this._loading = true;
      const contracts = {};
      this.setState({ contracts });
      if (contractNames[0] === '*') {
        contractNames = Wallet.getContractNames();
        // console.log('cn', contractNames);
        let contractsList;
        try {
          // console.log('try');
          //   contractsList = await Promise.all(
          //     contractNames.map(contractName =>
          //       Wallet.getContract(`${contractName}`)
          //     )
          //   );
          contractsList = await Wallet.getContractState();
        } catch (e) {
          console.error(e);
          throw e;
        }

        if (this._loading) {
          contractNames.forEach((contractName, index) => {
            contracts[contractName] = contractsList[index];
          });
          // if we already unmounted, skip this.
          this.setState({ contracts });

          const updateState = async () => {
            if (!callback) {
              return;
            }
            let newState;
            try {
              newState = await callback({ ...this.state, ...this.props });
            } catch (e) {
              console.error(e);
              throw e;
            }
            if (this._loading && newState) {
              setTimeout(updateState, interval);
              this.setState(newState);
            }
          };

          updateState();
        }
      }
      if (false) {
        let contractsList;
        try {
          console.log('try');
          contractsList = await Promise.all(
            contractNames.map(contractName =>
              Wallet.getContract(`${contractName}`)
            )
          );
        } catch (e) {
          console.error(e);
          throw e;
        }

        if (this._loading) {
          contractNames.forEach((contractName, index) => {
            contracts[contractName] = contractsList[index];
          });
          // if we already unmounted, skip this.
          this.setState({ contracts });

          const updateState = async () => {
            if (!callback) {
              return;
            }
            let newState;
            try {
              newState = await callback({ ...this.state, ...this.props });
            } catch (e) {
              console.error(e);
              throw e;
            }
            if (this._loading && newState) {
              setTimeout(updateState, interval);
              this.setState(newState);
            }
          };

          updateState();
        }
      }
    },

    componentWillUnmount() {
      this._loading = false;
    },
  });

export default withContracts;
