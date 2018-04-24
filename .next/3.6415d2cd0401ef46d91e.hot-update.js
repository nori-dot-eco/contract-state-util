webpackHotUpdate(3,{

/***/ "./lib/contracts.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, global, process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wallet = exports.getEtherscanURL = exports.getNetworkId = exports.web3 = undefined;

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var getNetworkId = exports.getNetworkId = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', new Promise(function (resolve, reject) {
              web3.version.getNetwork(function (error, networkId) {
                if (error) {
                  reject(error);
                } else {
                  resolve(networkId);
                }
              });
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getNetworkId() {
    return _ref.apply(this, arguments);
  };
}();

var getEtherscanURL = exports.getEtherscanURL = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(path) {
    var networkId;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getNetworkId();

          case 2:
            networkId = _context2.sent;
            return _context2.abrupt('return', 'https://etherscan.io' + path);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getEtherscanURL(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _truffleContract = __webpack_require__("./node_modules/truffle-contract/index.js");

var _truffleContract2 = _interopRequireDefault(_truffleContract);

var _States = __webpack_require__("./build/contracts/States.json");

var _States2 = _interopRequireDefault(_States);

var _MoreStates = __webpack_require__("./build/contracts/MoreStates.json");

var _MoreStates2 = _interopRequireDefault(_MoreStates);

var _web = __webpack_require__("./lib/web3.js");

var _truffle = __webpack_require__("./truffle.js");

var _truffle2 = _interopRequireDefault(_truffle);

var _es6Promisify = __webpack_require__("./node_modules/es6-promisify/dist/promisify.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var States = (0, _truffleContract2.default)(_States2.default);
var MoreStates = (0, _truffleContract2.default)(_MoreStates2.default);
var contracts = {
  States: States,
  MoreStates: MoreStates
};

var web3 = exports.web3 = (0, _web.setupWeb3)();

var providerPromise = new Promise(function (resolve, reject) {
  function setProviders() {
    if (global.web3) {
      Object.values(contracts).forEach(function (_contract) {
        _contract.setProvider(global.web3.currentProvider);
      });
      resolve({ contracts: contracts });
    } else {
      console.log('no web3 available in browser. Metamask probably not installed');
      reject(new Error('no web3 available in browser. Metamask probably not installed'));
    }
  }
  if (process.browser) {
    console.log('process.brows: ');
    if (global.document.readyState === 'complete') {
      setProviders();
    } else {
      global.addEventListener('load', setProviders);
    }
    setTimeout(function () {
      reject(new Error('timed out waiting for load event to trigger'));
    }, 5000);
  } else {
    setProviders();
    // resolve({ contracts });
  }
});

var Wallet = exports.Wallet = function () {
  _createClass(Wallet, null, [{
    key: 'withAddress',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(address) {
        var wallet;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                wallet = new Wallet(address);
                _context3.next = 3;
                return wallet.update();

              case 3:
                return _context3.abrupt('return', wallet);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function withAddress(_x2) {
        return _ref3.apply(this, arguments);
      }

      return withAddress;
    }()
  }, {
    key: 'getDefault',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var accounts;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Wallet.getEthAccounts();

              case 2:
                accounts = _context4.sent;
                return _context4.abrupt('return', Wallet.withAddress(accounts[0]));

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getDefault() {
        return _ref4.apply(this, arguments);
      }

      return getDefault;
    }()
  }, {
    key: 'getEthAccounts',
    value: function getEthAccounts() {
      return new Promise(function (resolve, reject) {
        web3.eth.getAccounts(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        });
      });
    }
  }, {
    key: 'getContract',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee5(contractName) {
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return providerPromise;

              case 2:
                return _context5.abrupt('return', contracts[contractName].deployed());

              case 3:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getContract(_x3) {
        return _ref5.apply(this, arguments);
      }

      return getContract;
    }()
  }]);

  function Wallet(address) {
    var _this = this;

    _classCallCheck(this, Wallet);

    this.getContractAddress = function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee6(contractName) {
        var _contract;

        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return Wallet.getContract(contractName);

              case 2:
                _contract = _context6.sent;
                return _context6.abrupt('return', _contract.address);

              case 4:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this);
      }));

      return function (_x4) {
        return _ref6.apply(this, arguments);
      };
    }();

    this.address = address;
  }

  _createClass(Wallet, [{
    key: 'update',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function update() {
        return _ref7.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }], [{
    key: 'getContractState',
    value: function getContractState() {
      var _this2 = this;

      var stateNamesAndVals = [];
      var contractStates = [];

      Object.values(contracts).forEach(function (_contract) {
        Object.values(_contract.abi).forEach(function () {
          var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee8(abi) {
            var stateValue;
            return _regenerator2.default.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (!(abi.type === 'function' && abi.constant)) {
                      _context8.next = 16;
                      break;
                    }

                    _context8.prev = 1;
                    stateValue = _this2.contractFunc(_contract.contractName + '.' + abi.name)();
                    _context8.t0 = stateNamesAndVals;
                    _context8.t1 = abi.name;
                    _context8.t2 = abi.outputs[0].type;
                    _context8.next = 8;
                    return stateValue;

                  case 8:
                    _context8.t3 = _context8.sent;
                    _context8.t4 = {
                      name: _context8.t1,
                      type: _context8.t2,
                      value: _context8.t3
                    };

                    _context8.t0.push.call(_context8.t0, _context8.t4);

                    _context8.next = 16;
                    break;

                  case 13:
                    _context8.prev = 13;
                    _context8.t5 = _context8['catch'](1);

                    console.log(_context8.t5);

                  case 16:
                    return _context8.abrupt('return', stateNamesAndVals);

                  case 17:
                  case 'end':
                    return _context8.stop();
                }
              }
            }, _callee8, _this2, [[1, 13]]);
          }));

          return function (_x5) {
            return _ref8.apply(this, arguments);
          };
        }());
        contractStates.push(Object.create({
          contractName: _contract.contractName,
          state: stateNamesAndVals
        }));
        stateNamesAndVals = [];
        return contractStates;
      });

      return contractStates;
    }
  }]);

  return Wallet;
}();

Wallet.contractFunc = function (contractDotFunc) {
  return function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _contractDotFunc$spli, _contractDotFunc$spli2, contractName, funcName, Contract;

      return _regenerator2.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _contractDotFunc$spli = contractDotFunc.split('.'), _contractDotFunc$spli2 = _slicedToArray(_contractDotFunc$spli, 2), contractName = _contractDotFunc$spli2[0], funcName = _contractDotFunc$spli2[1];
              _context9.next = 3;
              return Wallet.getContract(contractName);

            case 3:
              Contract = _context9.sent;
              return _context9.abrupt('return', args ? Contract[funcName].apply(Contract, args) : Contract[funcName].call());

            case 5:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, undefined);
    }));

    return function () {
      return _ref9.apply(this, arguments);
    };
  }();
};

;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(States, 'States', '/home/ubuntu/dev/contract-state-util/lib/contracts.js');
  reactHotLoader.register(MoreStates, 'MoreStates', '/home/ubuntu/dev/contract-state-util/lib/contracts.js');
  reactHotLoader.register(contracts, 'contracts', '/home/ubuntu/dev/contract-state-util/lib/contracts.js');
  reactHotLoader.register(web3, 'web3', '/home/ubuntu/dev/contract-state-util/lib/contracts.js');
  reactHotLoader.register(providerPromise, 'providerPromise', '/home/ubuntu/dev/contract-state-util/lib/contracts.js');
  reactHotLoader.register(getNetworkId, 'getNetworkId', '/home/ubuntu/dev/contract-state-util/lib/contracts.js');
  reactHotLoader.register(getEtherscanURL, 'getEtherscanURL', '/home/ubuntu/dev/contract-state-util/lib/contracts.js');
  reactHotLoader.register(Wallet, 'Wallet', '/home/ubuntu/dev/contract-state-util/lib/contracts.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module), __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=3.6415d2cd0401ef46d91e.hot-update.js.map