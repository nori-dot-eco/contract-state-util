import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {
  Card,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
} from '@material-ui/core';
import { compose, lifecycle } from 'recompose';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = {};

const SimpleTableUI = ({ contractStates, classes }) =>
  contractStates && (
    <Card>
      {contractStates.map(n => (
        <ExpansionPanel key={`${n.contractName}-contract-table`}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon color="primary" />}
          >
            <Typography variant="headline">
              Contract Name: {`${n.contractName} (Node ID: ${n.contractId})`}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Table style={{ width: '100%' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ minWidth: '250px' }}>
                      State Name
                    </TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Inputs</TableCell>
                    <TableCell>Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {n.state.map(e => (
                    <TableRow key={`${JSON.stringify(e)}`}>
                      <TableCell>{e.name}</TableCell>
                      <TableCell>{e.type}</TableCell>
                      <TableCell>{e.inputs}</TableCell>
                      <TableCell>{e.value.toString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <ExpansionPanel key={`${n.contractName}-contract-table`}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon color="primary" />}
                >
                  <Typography variant="title">Base Contracts:</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {n.baseContracts.baseContractsFromIds &&
                    n.baseContracts.baseContractsFromIds.map(b => (
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell>
                              <Typography variant="subheading">
                                {`Contract Name: ${
                                  typeof b !== 'undefined'
                                    ? b.contractName
                                    : 'LOKUP FAILED'
                                }`}
                              </Typography>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    ))}
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <TableRow>
                {' '}
                <TableCell>
                  *** If value contains asterix, its value was mocked due to it
                  being a complex type
                </TableCell>{' '}
              </TableRow>
            </Table>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </Card>
  );

SimpleTableUI.propTypes = {
  classes: PropTypes.object,
  contractStates: PropTypes.array.isRequired,
};
SimpleTableUI.defaultProps = {
  classes: {},
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
  classes: PropTypes.object,
};
SimpleTable.defaultProps = {
  classes: {},
};

export default SimpleTable;
