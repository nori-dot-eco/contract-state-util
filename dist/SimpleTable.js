'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _Table = require('material-ui/Table');

var _Table2 = _interopRequireDefault(_Table);

var _materialUi = require('material-ui');

var _recompose = require('recompose');

var _ExpandMore = require('material-ui-icons/ExpandMore');

var _ExpandMore2 = _interopRequireDefault(_ExpandMore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

var SimpleTableUI = function SimpleTableUI(_ref) {
  var contractStates = _ref.contractStates,
      classes = _ref.classes;
  return contractStates && _react2.default.createElement(
    _materialUi.Card,
    null,
    contractStates.map(function (n) {
      return _react2.default.createElement(
        _materialUi.ExpansionPanel,
        { key: n.contractName + '-contract-table' },
        _react2.default.createElement(
          _materialUi.ExpansionPanelSummary,
          {
            expandIcon: _react2.default.createElement(_ExpandMore2.default, { color: 'primary' })
          },
          _react2.default.createElement(
            _materialUi.Typography,
            { variant: 'headline' },
            'Contract Name: ',
            n.contractName + ' (Node ID: ' + n.contractId + ')'
          )
        ),
        _react2.default.createElement(
          _materialUi.ExpansionPanelDetails,
          null,
          _react2.default.createElement(
            _Table2.default,
            { style: { width: '100%' } },
            _react2.default.createElement(
              _Table2.default,
              null,
              _react2.default.createElement(
                _Table.TableHead,
                null,
                _react2.default.createElement(
                  _Table.TableRow,
                  null,
                  _react2.default.createElement(
                    _Table.TableCell,
                    { style: { minWidth: '250px' } },
                    'State Name'
                  ),
                  _react2.default.createElement(
                    _Table.TableCell,
                    null,
                    'Type'
                  ),
                  _react2.default.createElement(
                    _Table.TableCell,
                    null,
                    'Inputs'
                  ),
                  _react2.default.createElement(
                    _Table.TableCell,
                    null,
                    'Value'
                  )
                )
              ),
              _react2.default.createElement(
                _Table.TableBody,
                null,
                n.state.map(function (e) {
                  return _react2.default.createElement(
                    _Table.TableRow,
                    { key: '' + JSON.stringify(e) },
                    _react2.default.createElement(
                      _Table.TableCell,
                      null,
                      e.name
                    ),
                    _react2.default.createElement(
                      _Table.TableCell,
                      null,
                      e.type
                    ),
                    _react2.default.createElement(
                      _Table.TableCell,
                      null,
                      e.inputs
                    ),
                    _react2.default.createElement(
                      _Table.TableCell,
                      null,
                      e.value.toString()
                    )
                  );
                })
              )
            ),
            _react2.default.createElement(
              _materialUi.ExpansionPanel,
              { key: n.contractName + '-contract-table' },
              _react2.default.createElement(
                _materialUi.ExpansionPanelSummary,
                {
                  expandIcon: _react2.default.createElement(_ExpandMore2.default, { color: 'primary' })
                },
                _react2.default.createElement(
                  _materialUi.Typography,
                  { variant: 'title' },
                  'Base Contracts:'
                )
              ),
              _react2.default.createElement(
                _materialUi.ExpansionPanelDetails,
                null,
                n.baseContracts.baseContractsFromIds && n.baseContracts.baseContractsFromIds.map(function (b) {
                  return _react2.default.createElement(
                    _Table2.default,
                    null,
                    _react2.default.createElement(
                      _Table.TableBody,
                      null,
                      _react2.default.createElement(
                        _Table.TableRow,
                        null,
                        _react2.default.createElement(
                          _Table.TableCell,
                          null,
                          _react2.default.createElement(
                            _materialUi.Typography,
                            { variant: 'subheading' },
                            'Contract Name: ' + b.contractName
                          )
                        )
                      )
                    )
                  );
                })
              )
            ),
            _react2.default.createElement(
              _Table.TableRow,
              null,
              ' ',
              _react2.default.createElement(
                _Table.TableCell,
                null,
                '*** If value contains asterix, its value was mocked due to it being a complex type'
              ),
              ' '
            )
          )
        )
      );
    })
  );
};

SimpleTableUI.propTypes = {
  classes: _propTypes2.default.object,
  contractStates: _propTypes2.default.array.isRequired
};
SimpleTableUI.defaultProps = {
  classes: {}
};

var SimpleTable = (0, _recompose.compose)((0, _recompose.lifecycle)({
  componentWillReceiveProps: function componentWillReceiveProps() {
    var contractStates = this.props.contractStates;

    this.setState({
      contractStates: contractStates
    });
  }
}), (0, _styles.withStyles)(styles))(SimpleTableUI);
SimpleTable.propTypes = {
  classes: _propTypes2.default.object
};
SimpleTable.defaultProps = {
  classes: {}
};

exports.default = SimpleTable;