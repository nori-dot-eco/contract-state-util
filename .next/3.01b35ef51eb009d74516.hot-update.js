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
      width: '100%'
    },
    table: {
      maxWidth: 400
    }
  };
};

var SimpleTableUI = (0, _styles.withStyles)(styles)(function (_ref) {
  var contractStates = _ref.contractStates,
      classes = _ref.classes;
  return _react2.default.createElement(
    'div',
    { className: classes.root, __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    },
    contractStates && contractStates.map(function (n) {
      return _react2.default.createElement(
        _materialUi.Card,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        },
        _react2.default.createElement(
          _materialUi.CardContent,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          },
          _react2.default.createElement(
            _Table2.default,
            { className: classes.table, __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              }
            },
            _react2.default.createElement(
              _Table.TableHead,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30
                }
              },
              _react2.default.createElement(
                _materialUi.Typography,
                { variant: 'title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  }
                },
                n.contractName
              ),
              _react2.default.createElement(
                _Table.TableRow,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                  }
                },
                _react2.default.createElement(
                  _Table.TableCell,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 33
                    }
                  },
                  'Name'
                ),
                _react2.default.createElement(
                  _Table.TableCell,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 34
                    }
                  },
                  'Type'
                ),
                _react2.default.createElement(
                  _Table.TableCell,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 35
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
                  lineNumber: 38
                }
              },
              n.state.map(function (e) {
                console.log('e.value ', e.value);
                return _react2.default.createElement(
                  _Table.TableRow,
                  { key: e.name, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 42
                    }
                  },
                  _react2.default.createElement(
                    _Table.TableCell,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                      }
                    },
                    e.name
                  ),
                  _react2.default.createElement(
                    _Table.TableCell,
                    { numeric: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                      }
                    },
                    e.type
                  ),
                  _react2.default.createElement(
                    _Table.TableCell,
                    { numeric: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45
                      }
                    },
                    e.value.toString()
                  )
                );
              })
            )
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
      var contractState;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _contracts.Wallet.getContractState();

            case 2:
              contractState = _context.sent;
              _context.t0 = _this;
              _context.next = 6;
              return contractState;

            case 6:
              _context.t1 = _context.sent;
              _context.t2 = {
                contractStates: _context.t1
              };

              _context.t0.setState.call(_context.t0, _context.t2);

              _context.next = 11;
              return _this.forceUpdate();

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
}), (0, _recompose.mapProps)(function (_ref2) {
  var contractStates = _ref2.contractStates;
  return (
    // console.log('mapping props', contractStates[0]);
    {
      // date: block ? moment(new Date(block.timestamp * 1000)).format('LL') : null,
      // numCrcs: Web3.fromWei(log.args.value).toString(),
      contractStates: contractStates
    }
  );
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
//# sourceMappingURL=3.01b35ef51eb009d74516.hot-update.js.map