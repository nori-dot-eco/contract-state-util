module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 64);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(3);

var _Table = __webpack_require__(4);

var _Table2 = _interopRequireDefault(_Table);

var _TableBody = __webpack_require__(5);

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableCell = __webpack_require__(6);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _TableHead = __webpack_require__(7);

var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableRow = __webpack_require__(8);

var _TableRow2 = _interopRequireDefault(_TableRow);

var _core = __webpack_require__(9);

var _recompose = __webpack_require__(10);

var _ExpandMore = __webpack_require__(11);

var _ExpandMore2 = _interopRequireDefault(_ExpandMore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

var SimpleTableUI = function SimpleTableUI(_ref) {
  var contractStates = _ref.contractStates,
      classes = _ref.classes;
  return contractStates && _react2.default.createElement(
    _core.Card,
    null,
    contractStates.map(function (n) {
      return _react2.default.createElement(
        _core.ExpansionPanel,
        { key: n.contractName + '-contract-table' },
        _react2.default.createElement(
          _core.ExpansionPanelSummary,
          {
            expandIcon: _react2.default.createElement(_ExpandMore2.default, { color: 'primary' })
          },
          _react2.default.createElement(
            _core.Typography,
            { variant: 'headline' },
            'Contract Name: ',
            n.contractName + ' (Node ID: ' + n.contractId + ')'
          )
        ),
        _react2.default.createElement(
          _core.ExpansionPanelDetails,
          null,
          _react2.default.createElement(
            _Table2.default,
            { style: { width: '100%' } },
            _react2.default.createElement(
              _Table2.default,
              null,
              _react2.default.createElement(
                _TableHead2.default,
                null,
                _react2.default.createElement(
                  _TableRow2.default,
                  null,
                  _react2.default.createElement(
                    _TableCell2.default,
                    { style: { minWidth: '250px' } },
                    'State Name'
                  ),
                  _react2.default.createElement(
                    _TableCell2.default,
                    null,
                    'Type'
                  ),
                  _react2.default.createElement(
                    _TableCell2.default,
                    null,
                    'Inputs'
                  ),
                  _react2.default.createElement(
                    _TableCell2.default,
                    null,
                    'Value'
                  )
                )
              ),
              _react2.default.createElement(
                _TableBody2.default,
                null,
                n.state.map(function (e) {
                  return _react2.default.createElement(
                    _TableRow2.default,
                    { key: '' + JSON.stringify(e) },
                    _react2.default.createElement(
                      _TableCell2.default,
                      null,
                      e.name
                    ),
                    _react2.default.createElement(
                      _TableCell2.default,
                      null,
                      e.type
                    ),
                    _react2.default.createElement(
                      _TableCell2.default,
                      null,
                      e.inputs
                    ),
                    _react2.default.createElement(
                      _TableCell2.default,
                      null,
                      e.value.toString()
                    )
                  );
                })
              )
            ),
            _react2.default.createElement(
              _core.ExpansionPanel,
              { key: n.contractName + '-contract-table' },
              _react2.default.createElement(
                _core.ExpansionPanelSummary,
                {
                  expandIcon: _react2.default.createElement(_ExpandMore2.default, { color: 'primary' })
                },
                _react2.default.createElement(
                  _core.Typography,
                  { variant: 'title' },
                  'Base Contracts:'
                )
              ),
              _react2.default.createElement(
                _core.ExpansionPanelDetails,
                null,
                n.baseContracts.baseContractsFromIds && n.baseContracts.baseContractsFromIds.map(function (b) {
                  return _react2.default.createElement(
                    _Table2.default,
                    null,
                    _react2.default.createElement(
                      _TableBody2.default,
                      null,
                      _react2.default.createElement(
                        _TableRow2.default,
                        null,
                        _react2.default.createElement(
                          _TableCell2.default,
                          null,
                          _react2.default.createElement(
                            _core.Typography,
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
              _TableRow2.default,
              null,
              ' ',
              _react2.default.createElement(
                _TableCell2.default,
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

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ })

/******/ });