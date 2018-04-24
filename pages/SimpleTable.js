import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from 'material-ui/Table';
import { Card, CardContent, Typography } from 'material-ui';
import { compose, lifecycle, mapProps } from 'recompose';
import { Wallet } from '../lib/contracts';

const styles = theme => ({
  root: {
    width: '100%',
  },
  table: {
    maxWidth: 400,
  },
});

const SimpleTableUI = withStyles(styles)(({ contractStates, classes }) => (
  <div className={classes.root}>
    {contractStates &&
      contractStates.map(n => (
        <Card>
          <CardContent>
            <Table className={classes.table}>
              <TableHead>
                <Typography variant="title">{n.contractName}</Typography>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {n.state.map(e => {
                  console.log('e.value ', e.value);
                  return (
                    <TableRow key={e.name}>
                      <TableCell>{e.name}</TableCell>
                      <TableCell numeric>{e.type}</TableCell>
                      <TableCell numeric>{e.value.toString()}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ))}
  </div>
));

SimpleTableUI.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SimpleTable = compose(
  lifecycle({
    async componentWillReceiveProps() {
      const contractState = await Wallet.getContractState();
      const test = await Wallet.contractFunc('States._string')();
      await this.setState({
        contractStates: contractState,
      });
      console.log('received props for table', this.props);
      console.log('test', test);

      await this.forceUpdate();
    },
  }),
  mapProps(({ contractStates }) =>
    // console.log('mapping props', contractStates[0]);
    ({
      // date: block ? moment(new Date(block.timestamp * 1000)).format('LL') : null,
      // numCrcs: Web3.fromWei(log.args.value).toString(),
      contractStates,
    })
  )
)(SimpleTableUI);

export default SimpleTable;
