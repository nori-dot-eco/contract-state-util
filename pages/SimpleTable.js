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
import {
  compose,
  lifecycle,
  mapProps,
  shouldUpdate,
  shallowEqual,
} from 'recompose';
import { Wallet } from '../lib/contracts';

const styles = theme => ({
  root: {
    width: '100%',
  },
  table: {
    maxWidth: 400,
  },
});

const SimpleTableUI = withStyles(styles)(({ contractStates, classes }) => {
  console.debug('render ui');
  return (
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
                  {n.state.map(e => (
                    <TableRow key={e.name}>
                      <TableCell>{e.name}</TableCell>
                      <TableCell numeric>{e.type}</TableCell>
                      <TableCell numeric>{e.value.toString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ))}
    </div>
  );
});

SimpleTableUI.propTypes = {
  classes: PropTypes.object.isRequired,
};

// function shallowEqual(objA, objB) {
//   // console.log('entering hte shallow equal');
//   if (objA === objB) {
//     console.log(objA, objB);
//     return true;
//   }

//   if (
//     typeof objA !== 'object' ||
//     objA === null ||
//     typeof objB !== 'object' ||
//     objB === null
//   ) {
//     console.log(
//       typeof objA !== 'object',
//       objA === null,
//       typeof objB !== 'object',
//       objB === null,
//       objA,
//       objB
//     );
//     return false;
//   }

//   const keysA = Object.keys(objA);
//   const keysB = Object.keys(objB);

//   if (keysA.length !== keysB.length) {
//     console.log(keysA.length, keysB.length);
//     return false;
//   }

//   // Test for A's keys different from B.
//   const bHasOwnProperty = hasOwnProperty.bind(objB);
//   for (let i = 0; i < keysA.length; i++) {
//     if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
//       // console.log(
//       //   'returning false i guess',
//       //   bHasOwnProperty(keysA[i]),
//       //   objA[keysA[i]],
//       //   objB[keysA[i]]
//       // );
//       return false;
//     }
//   }
//   console.log('returning true i guess');
//   return true;
// }

// function shallowCompare(instance, nextProps) {
//   return shallowEqual(instance, nextProps);
// }

const SimpleTable = compose(
  lifecycle({
    componentWillReceiveProps() {
      const { contractStates } = this.props;
      this.setState({
        contractStates,
      });

      this.forceUpdate();
    },
  })
)(SimpleTableUI);
SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default SimpleTable;
