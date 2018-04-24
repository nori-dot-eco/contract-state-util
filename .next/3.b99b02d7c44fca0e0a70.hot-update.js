webpackHotUpdate(3,{

/***/ "./pages/SimpleTable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _jsxFileName = '/home/ubuntu/dev/contract-state-util/pages/SimpleTable.js';

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__("./node_modules/material-ui/styles/index.js");

var _Table = __webpack_require__("./node_modules/material-ui/Table/index.js");

var _Table2 = _interopRequireDefault(_Table);

var _materialUi = __webpack_require__("./node_modules/material-ui/index.es.js");

var _Paper = __webpack_require__("./node_modules/material-ui/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _index = __webpack_require__("./index.js");

var _index2 = _interopRequireDefault(_index);

var _recompose = __webpack_require__("./node_modules/recompose/dist/Recompose.esm.js");

var _contracts = __webpack_require__("./lib/contracts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto'
    },
    table: {
      minWidth: 700
    }
  };
};

var id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id: id, name: name, calories: calories, fat: fat, carbs: carbs, protein: protein };
}

var data = [createData('Frozen yoghurt', 159, 6.0, 24, 4.0), createData('Ice cream sandwich', 237, 9.0, 37, 4.3), createData('Eclair', 262, 16.0, 24, 6.0), createData('Cupcake', 305, 3.7, 67, 4.3), createData('Gingerbread', 356, 16.0, 49, 3.9)];
var SimpleTableUI = (0, _styles.withStyles)(styles)(function (_ref) {
  var contractStates = _ref.contractStates,
      classes = _ref.classes;
  return _react2.default.createElement(
    _Paper2.default,
    { className: classes.root, __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      }
    },
    contractStates && contractStates.map(function (n) {
      console.log('contractStates', contractStates);
      console.log('n.state', n.state.length);
      return _react2.default.createElement(
        _Paper2.default,
        { className: classes.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        },
        _react2.default.createElement(
          _Table2.default,
          { className: classes.table, __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          },
          _react2.default.createElement(
            _Table.TableHead,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            },
            _react2.default.createElement(
              _materialUi.Typography,
              { variant: 'title', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                }
              },
              n.contractName
            ),
            _react2.default.createElement(
              _Table.TableRow,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 52
                }
              },
              _react2.default.createElement(
                _Table.TableCell,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                  }
                },
                'Name'
              ),
              _react2.default.createElement(
                _Table.TableCell,
                { numeric: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                  }
                },
                'Type'
              ),
              _react2.default.createElement(
                _Table.TableCell,
                { numeric: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                  }
                },
                'Value'
              )
            )
          ),
          _react2.default.createElement(
            _Table.TableBody,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              }
            },
            n.state.map(function (e) {
              console.log('e.value ', e.value);
              return _react2.default.createElement(
                _Table.TableRow,
                { key: n.contractName, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                  }
                },
                _react2.default.createElement(
                  _Table.TableCell,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 63
                    }
                  },
                  e.name
                ),
                _react2.default.createElement(
                  _Table.TableCell,
                  { numeric: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 64
                    }
                  },
                  e.type
                ),
                _react2.default.createElement(
                  _Table.TableCell,
                  { numeric: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 65
                    }
                  },
                  e.value.toString()
                )
              );
            })
          )
        )
      );
    })
  );
});

SimpleTableUI.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

var SimpleTable = (0, _recompose.compose)((0, _recompose.lifecycle)({
  componentWillReceiveProps: function componentWillReceiveProps() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var contractState, test;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _contracts.Wallet.getContractState();

            case 2:
              contractState = _context.sent;
              _context.next = 5;
              return _contracts.Wallet.contractFunc('States._string')();

            case 5:
              test = _context.sent;
              _context.next = 8;
              return _this.setState({
                contractStates: contractState
              });

            case 8:
              console.log('received props for table', _this.props);
              console.log('test', test);

              _context.next = 12;
              return _this.forceUpdate();

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
}

// web3.eth.getBlock(this.props.log.blockNumber, (err, block) => {
//   this.setState({
//     block,
//   });
// });
), (0, _recompose.mapProps)(function (_ref2) {
  var contractStates = _ref2.contractStates;

  console.log('mapping props', contractStates[0]);
  return {
    // date: block ? moment(new Date(block.timestamp * 1000)).format('LL') : null,
    // numCrcs: Web3.fromWei(log.args.value).toString(),
    contractStates: contractStates
  };
}))(SimpleTableUI);

var _default = SimpleTable;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, 'styles', '/home/ubuntu/dev/contract-state-util/pages/SimpleTable.js');
  reactHotLoader.register(id, 'id', '/home/ubuntu/dev/contract-state-util/pages/SimpleTable.js');
  reactHotLoader.register(createData, 'createData', '/home/ubuntu/dev/contract-state-util/pages/SimpleTable.js');
  reactHotLoader.register(data, 'data', '/home/ubuntu/dev/contract-state-util/pages/SimpleTable.js');
  reactHotLoader.register(SimpleTableUI, 'SimpleTableUI', '/home/ubuntu/dev/contract-state-util/pages/SimpleTable.js');
  reactHotLoader.register(SimpleTable, 'SimpleTable', '/home/ubuntu/dev/contract-state-util/pages/SimpleTable.js');
  reactHotLoader.register(_default, 'default', '/home/ubuntu/dev/contract-state-util/pages/SimpleTable.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/SimpleTable")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.b99b02d7c44fca0e0a70.hot-update.js.map