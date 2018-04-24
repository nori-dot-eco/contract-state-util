webpackHotUpdate(3,{

/***/ "./pages/SimpleTable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/ubuntu/dev/contract-state-util/pages/SimpleTable.js';

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__("./node_modules/material-ui/styles/index.js");

var _Table = __webpack_require__("./node_modules/material-ui/Table/index.js");

var _Table2 = _interopRequireDefault(_Table);

var _Paper = __webpack_require__("./node_modules/material-ui/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _index = __webpack_require__("./index.js");

var _index2 = _interopRequireDefault(_index);

var _recompose = __webpack_require__("./node_modules/recompose/dist/Recompose.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
  var date = _ref.date,
      numCrcs = _ref.numCrcs,
      status = _ref.status,
      onClickTryAgain = _ref.onClickTryAgain,
      classes = _ref.classes;
  return _react2.default.createElement(
    _Paper2.default,
    { className: classes.root, __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      }
    },
    _react2.default.createElement(
      _Table2.default,
      { className: classes.table, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      },
      _react2.default.createElement(
        _Table.TableHead,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        },
        _react2.default.createElement(
          _Table.TableRow,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          },
          _react2.default.createElement(
            _Table.TableCell,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              }
            },
            'Name'
          ),
          _react2.default.createElement(
            _Table.TableCell,
            { numeric: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              }
            },
            'Type'
          ),
          _react2.default.createElement(
            _Table.TableCell,
            { numeric: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            },
            'Value'
          )
        )
      ),
      _react2.default.createElement(_Table.TableBody, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      })
    )
  );
});

SimpleTable.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

var SimpleTable = (0, _recompose.compose)((0, _recompose.lifecycle)({
  componentWillMount: function componentWillMount() {
    var _this = this;

    web3.eth.getBlock(this.props.log.blockNumber, function (err, block) {
      _this.setState({
        block: block
      });
    });
  }
}), (0, _recompose.mapProps)(function (_ref2) {
  var log = _ref2.log,
      block = _ref2.block,
      rest = _objectWithoutProperties(_ref2, ['log', 'block']);

  return _extends({
    // date: block ? moment(new Date(block.timestamp * 1000)).format('LL') : null,
    // numCrcs: Web3.fromWei(log.args.value).toString(),
    status: 'success'
  }, rest);
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
//# sourceMappingURL=3.cf31b81759844a526674.hot-update.js.map