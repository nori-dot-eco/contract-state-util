webpackHotUpdate(3,{

/***/ "./index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contracts = __webpack_require__("./lib/contracts.js");

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var state = [];

var getState = function getState() {
  var contractStates = _contracts.Wallet.getContractState();
  console.log(contractStates);
  // contractStates.map(c => {
  //   console.log('c', { c });
  // });

  // for (const { contractName: c, state: s } of contractStates) {
  //   console.log('Contract Name: ', c);
  //   for (let i = 0; i < s.length; i++) {
  //     console.log(
  //       'Name:',
  //       s[i].name,
  //       '| Type:',
  //       s[i].type,
  //       '| Value:',
  //       await s[i].value
  //     );
  //   }
  //   console.log('----');
  // }
  // await contractStates;
  return _contracts.Wallet.getContractState();
};

var _default = getState;
exports.default = _default;
// getState();

;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(state, 'state', '/home/ubuntu/dev/contract-state-util/index.js');
  reactHotLoader.register(getState, 'getState', '/home/ubuntu/dev/contract-state-util/index.js');
  reactHotLoader.register(_default, 'default', '/home/ubuntu/dev/contract-state-util/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

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
      width: '100%'
    },
    table: {
      maxWidth: 400
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
    'div',
    { className: classes.root, __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      }
    },
    contractStates && contractStates.map(function (n) {
      return _react2.default.createElement(
        _materialUi.Card,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        },
        _react2.default.createElement(
          _materialUi.CardContent,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          },
          _react2.default.createElement(
            _Table2.default,
            { className: classes.table, __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              }
            },
            _react2.default.createElement(
              _Table.TableHead,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                }
              },
              _react2.default.createElement(
                _materialUi.Typography,
                { variant: 'title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  }
                },
                n.contractName
              ),
              _react2.default.createElement(
                _Table.TableRow,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  }
                },
                _react2.default.createElement(
                  _Table.TableCell,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 49
                    }
                  },
                  'Name'
                ),
                _react2.default.createElement(
                  _Table.TableCell,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 50
                    }
                  },
                  'Type'
                ),
                _react2.default.createElement(
                  _Table.TableCell,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 51
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
                  lineNumber: 54
                }
              },
              n.state.map(function (e) {
                console.log('e.value ', e.value);
                return _react2.default.createElement(
                  _Table.TableRow,
                  { key: e.name, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 58
                    }
                  },
                  _react2.default.createElement(
                    _Table.TableCell,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                      }
                    },
                    e.name
                  ),
                  _react2.default.createElement(
                    _Table.TableCell,
                    { numeric: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60
                      }
                    },
                    e.type
                  ),
                  _react2.default.createElement(
                    _Table.TableCell,
                    { numeric: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
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

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _jsxFileName = '/home/ubuntu/dev/contract-state-util/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _SimpleTable = __webpack_require__("./pages/SimpleTable.js");

var _SimpleTable2 = _interopRequireDefault(_SimpleTable);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = __webpack_require__("./index.js");

var _index2 = _interopRequireDefault(_index);

var _contracts = __webpack_require__("./lib/contracts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      contractStates: null
    }, _this.logStates = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _ref3, c, s, i;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(_this.state.contractStates);
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 4;
              _iterator = _this.state.contractStates[Symbol.iterator]();

            case 6:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context.next = 26;
                break;
              }

              _ref3 = _step.value;
              c = _ref3.contractName, s = _ref3.state;

              console.log('Contract Name: ', c);
              i = 0;

            case 11:
              if (!(i < s.length)) {
                _context.next = 22;
                break;
              }

              _context.t0 = console;
              _context.t1 = s[i].name;
              _context.t2 = s[i].type;
              _context.next = 17;
              return s[i].value;

            case 17:
              _context.t3 = _context.sent;

              _context.t0.log.call(_context.t0, 'Name:', _context.t1, '| Type:', _context.t2, '| Value:', _context.t3);

            case 19:
              i++;
              _context.next = 11;
              break;

            case 22:
              console.log('----');

            case 23:
              _iteratorNormalCompletion = true;
              _context.next = 6;
              break;

            case 26:
              _context.next = 32;
              break;

            case 28:
              _context.prev = 28;
              _context.t4 = _context['catch'](4);
              _didIteratorError = true;
              _iteratorError = _context.t4;

            case 32:
              _context.prev = 32;
              _context.prev = 33;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 35:
              _context.prev = 35;

              if (!_didIteratorError) {
                _context.next = 38;
                break;
              }

              throw _iteratorError;

            case 38:
              return _context.finish(35);

            case 39:
              return _context.finish(32);

            case 40:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[4, 28, 32, 40], [33,, 35, 39]]);
    })), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var contractState;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _contracts.Wallet.getContractState();

              case 2:
                contractState = _context2.sent;
                _context2.next = 5;
                return this.setState({
                  contractStates: contractState
                });

              case 5:
                console.log('mounted', this.state.contractStates);
                _context2.next = 8;
                return this.forceUpdate();

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentWillMount() {
        return _ref4.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var contractStates = this.state.contractStates;
      // if (this.state.contractStates) {
      //    contractStates  = this.state.contractStates;
      //   console.log(contractStates);
      //   // this.logStates();
      // }
      // console.log('rendering', this.state.contractStates);

      return contractStates && _react2.default.createElement(
        'div',
        { className: 'App', __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        },
        _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          },
          _react2.default.createElement(
            'header',
            { className: 'App-header', __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              }
            },
            _react2.default.createElement(
              'h1',
              { className: 'App-title', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 52
                }
              },
              'Contract States'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          },
          contractStates && _react2.default.createElement(_SimpleTable2.default, { contractStates: contractStates, __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          })
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return App;
}(_react.Component);

var _default = App;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, 'App', '/home/ubuntu/dev/contract-state-util/pages/index.js');
  reactHotLoader.register(_default, 'default', '/home/ubuntu/dev/contract-state-util/pages/index.js');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.f4e40a699d936de69da1.hot-update.js.map