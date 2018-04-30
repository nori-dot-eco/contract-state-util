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
import { compose, lifecycle } from 'recompose';

const styles = () => ({
  root: {
    width: '500px !important',
  },
  table: {
    maxWidth: '400px',
  },
});

const SimpleTableUI = ({ contractStates, classes }) => (
  <div className={classes.table}>
    {contractStates &&
      contractStates.map(n => (
        <Card className={classes.table}>
          <CardContent>
            <Table className={classes.table}>
              <TableHead>
                <Typography variant="title">
                  Contract Name: {n.contractName}
                </Typography>
                <TableRow>
                  <TableCell>State Name</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {n.state.map(e => (
                  <TableRow key={e.name}>
                    <TableCell>{e.name}</TableCell>
                    <TableCell>{e.type}</TableCell>
                    <TableCell>{e.value.toString()}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  {' '}
                  <TableCell>
                    *** If value contains asterix, its value was mocked due to
                    it being a complex type
                  </TableCell>{' '}
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ))}
  </div>
);

SimpleTableUI.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SimpleTable = compose(
  lifecycle({
    componentWillReceiveProps() {
      const { contractStates } = this.props;
      this.setState({
        contractStates,
      });
    },
  }),
  withStyles(styles)
)(SimpleTableUI);
SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default SimpleTable;
