webpackHotUpdate(3,{

/***/ "./pages/SimpleTable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
        lineNumber: 23
      }
    },
    _react2.default.createElement(
      _materialUi.Card,
      { className: classes.table, __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      },
      _react2.default.createElement(
        _materialUi.CardContent,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        },
        contractStates && contractStates.map(function (n) {
          return _react2.default.createElement(
            _Table2.default,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            },
            _react2.default.createElement(
              _Table.TableHead,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                }
              },
              _react2.default.createElement(
                _materialUi.Typography,
                { variant: 'title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                  }
                },
                n.contractName
              ),
              _react2.default.createElement(
                _Table.TableRow,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  }
                },
                _react2.default.createElement(
                  _Table.TableCell,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 32
                    }
                  },
                  'Name'
                ),
                _react2.default.createElement(
                  _Table.TableCell,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 33
                    }
                  },
                  'Type'
                ),
                _react2.default.createElement(
                  _Table.TableCell,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 34
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
                  lineNumber: 37
                }
              },
              n.state.map(function (e) {
                return _react2.default.createElement(
                  _Table.TableRow,
                  { key: e.name, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 39
                    }
                  },
                  _react2.default.createElement(
                    _Table.TableCell,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                      }
                    },
                    e.name
                  ),
                  _react2.default.createElement(
                    _Table.TableCell,
                    { numeric: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                      }
                    },
                    e.type
                  ),
                  _react2.default.createElement(
                    _Table.TableCell,
                    { numeric: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                      }
                    },
                    e.value.toString()
                  )
                );
              })
            )
          );
        })
      )
    )
  );
});

SimpleTableUI.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

var SimpleTable = (0, _recompose.compose)((0, _recompose.lifecycle)({
  componentWillReceiveProps: function componentWillReceiveProps() {
    var contractStates = this.props.contractStates;

    this.setState({
      contractStates: contractStates
    });
  }
}))(SimpleTableUI);
SimpleTable.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

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
//# sourceMappingURL=3.e139b32c8dd408c010dd.hot-update.js.map