import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from 'material-ui/Table';
import { Card, CardContent, Typography } from 'material-ui';
import { compose, lifecycle } from 'recompose';
import withContracts from './withContracts';
import { Wallet, web3 } from '../lib/contracts';

const styles = () => ({
  root: {
    width: '500px !important',
  },
  table: {
    maxWidth: '400px',
  },
});

// const StatesUI = ({ contractStates, classes }) => {
//   console.log(
//     'rendering',
//     contractStates &&
//       Object.keys(contractStates).forEach(s => {
//         console.log('s', s);
//       })
//   );
//   return (
//     <div className={classes.table}>
//       {contractStates &&
//         Object.values(contractStates).forEach(s => {
//           console.log('statesssss', s.state[0]);
//           return (
//             <Card className={classes.table}>
//               <CardContent>
//                 <Table className={classes.table}>
//                   <TableHead>
//                     <Typography variant="title">Contract Name: </Typography>
//                     <TableRow>
//                       <TableCell>State Name</TableCell>
//                       <TableCell>Type</TableCell>
//                       <TableCell>Value</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {s.state.map(e => (
//                       <TableRow key={e.name}>
//                         <TableCell>{e.name}</TableCell>
//                         <TableCell>{e.type}</TableCell>
//                         <TableCell>{e.value.toString()}</TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </CardContent>
//             </Card>
//           );
//         })}
//     </div>
//   );
// };
export class StatesUI extends Component {
  static propTypes = {
    contractStates: PropTypes.object,
  };

  static defaultProps = {
    contractStates: {},
  };
  componentWillReceiveProps() {
    console.log('received props');
    const { contractStates } = this.props;
    this.forceUpdate();
  }
  componentWillUpdate() {
    console.log('received componentWillUpdate');
  }

  render() {
    const { contractStates, classes } = this.props;
    const a = (
      <div className={classes.table}>
        {Object.values(contractStates).forEach(s => (
          <Card className={classes.table}>
            bb
            <CardContent>
              <Table className={classes.table}>
                <TableHead>
                  <Typography variant="title">Contract Name: </Typography>
                  <TableRow>
                    <TableCell>State Name</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {s.state.map(e => (
                    <TableRow key={e.name}>
                      <TableCell>{e.name}</TableCell>
                      <TableCell>{e.type}</TableCell>
                      <TableCell>{e.value.toString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ))}
      </div>
    );
    Object.values(contractStates).forEach(s =>
      s.state.map(e => console.log('s.state', e.name))
    );
    return a;
  }
}

StatesUI.propTypes = {
  classes: PropTypes.object.isRequired,
};

const States = compose(
  withStyles(styles),
  withContracts(['*'], async ({ address, contracts: States }) => ({
    contractStates: States,
  }))
)(StatesUI);
States.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default States;

// const AssetList = withContracts(
//   ['TonToken', 'Crc'],
//   async ({ address, contracts: { TonToken, Crc } }) => ({
//     noriBalance: web3.fromWei(await TonToken.balanceOf(address)).toString(),
//     crcBalance: web3.fromWei(await Crc.balanceOf(address)).toString(),
//   })
// )(AssetListUI);
