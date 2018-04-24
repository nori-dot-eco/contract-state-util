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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/contracts/MoreStates.json":
/***/ (function(module, exports) {

module.exports = {"contractName":"MoreStates","abi":[{"constant":true,"inputs":[],"name":"_bool2","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_uint2","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_string2","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}],"bytecode":"0x606060405260016000556040805190810160405280600781526020017f737472696e67320000000000000000000000000000000000000000000000000081525060019080519060200190610054929190610080565b506000600260006101000a81548160ff021916908315150217905550341561007b57600080fd5b610125565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100c157805160ff19168380011785556100ef565b828001600101855582156100ef579182015b828111156100ee5782518255916020019190600101906100d3565b5b5090506100fc9190610100565b5090565b61012291905b8082111561011e576000816000905550600101610106565b5090565b90565b610223806101346000396000f300606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063a2e7fe8a1461005c578063b6e6f25514610089578063c23ca580146100b2575b600080fd5b341561006757600080fd5b61006f610140565b604051808215151515815260200191505060405180910390f35b341561009457600080fd5b61009c610153565b6040518082815260200191505060405180910390f35b34156100bd57600080fd5b6100c5610159565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101055780820151818401526020810190506100ea565b50505050905090810190601f1680156101325780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b600260009054906101000a900460ff1681565b60005481565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101ef5780601f106101c4576101008083540402835291602001916101ef565b820191906000526020600020905b8154815290600101906020018083116101d257829003601f168201915b5050505050815600a165627a7a723058204eadfee8b54f80c96a7344366f86cbf4ec1346f192077d21d296fb145833d4640029","deployedBytecode":"0x606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063a2e7fe8a1461005c578063b6e6f25514610089578063c23ca580146100b2575b600080fd5b341561006757600080fd5b61006f610140565b604051808215151515815260200191505060405180910390f35b341561009457600080fd5b61009c610153565b6040518082815260200191505060405180910390f35b34156100bd57600080fd5b6100c5610159565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101055780820151818401526020810190506100ea565b50505050905090810190601f1680156101325780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b600260009054906101000a900460ff1681565b60005481565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101ef5780601f106101c4576101008083540402835291602001916101ef565b820191906000526020600020905b8154815290600101906020018083116101d257829003601f168201915b5050505050815600a165627a7a723058204eadfee8b54f80c96a7344366f86cbf4ec1346f192077d21d296fb145833d4640029","sourceMap":"26:123:1:-;;;73:1;52:22;;80:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;141:5;120:26;;;;;;;;;;;;;;;;;;;;26:123;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;","deployedSourceMap":"26:123:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;120:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;52:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;80:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;80:34:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;120:26;;;;;;;;;;;;;:::o;52:22::-;;;;:::o;80:34::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o","source":"pragma solidity ^0.4.20;\n\ncontract MoreStates {\n    uint public _uint2 = 1;\n    string public _string2 = \"string2\";\n    bool public _bool2 = false;\n}","sourcePath":"/home/ubuntu/dev/contract-state-util/contracts/MoreStates.sol","ast":{"absolutePath":"/home/ubuntu/dev/contract-state-util/contracts/MoreStates.sol","exportedSymbols":{"MoreStates":[68]},"id":69,"nodeType":"SourceUnit","nodes":[{"id":58,"literals":["solidity","^","0.4",".20"],"nodeType":"PragmaDirective","src":"0:24:1"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":68,"linearizedBaseContracts":[68],"name":"MoreStates","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":61,"name":"_uint2","nodeType":"VariableDeclaration","scope":68,"src":"52:22:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":59,"name":"uint","nodeType":"ElementaryTypeName","src":"52:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"31","id":60,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"73:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"visibility":"public"},{"constant":false,"id":64,"name":"_string2","nodeType":"VariableDeclaration","scope":68,"src":"80:34:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"},"typeName":{"id":62,"name":"string","nodeType":"ElementaryTypeName","src":"80:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string storage pointer"}},"value":{"argumentTypes":null,"hexValue":"737472696e6732","id":63,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"105:9:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_799a81827817efd4e794a71804dd55521cf5563c764ff06e7c5bb2c2ac2b2596","typeString":"literal_string \"string2\""},"value":"string2"},"visibility":"public"},{"constant":false,"id":67,"name":"_bool2","nodeType":"VariableDeclaration","scope":68,"src":"120:26:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":65,"name":"bool","nodeType":"ElementaryTypeName","src":"120:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":{"argumentTypes":null,"hexValue":"66616c7365","id":66,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"141:5:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"},"visibility":"public"}],"scope":69,"src":"26:123:1"}],"src":"0:149:1"},"legacyAST":{"absolutePath":"/home/ubuntu/dev/contract-state-util/contracts/MoreStates.sol","exportedSymbols":{"MoreStates":[68]},"id":69,"nodeType":"SourceUnit","nodes":[{"id":58,"literals":["solidity","^","0.4",".20"],"nodeType":"PragmaDirective","src":"0:24:1"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":68,"linearizedBaseContracts":[68],"name":"MoreStates","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":61,"name":"_uint2","nodeType":"VariableDeclaration","scope":68,"src":"52:22:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":59,"name":"uint","nodeType":"ElementaryTypeName","src":"52:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"31","id":60,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"73:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"visibility":"public"},{"constant":false,"id":64,"name":"_string2","nodeType":"VariableDeclaration","scope":68,"src":"80:34:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"},"typeName":{"id":62,"name":"string","nodeType":"ElementaryTypeName","src":"80:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string storage pointer"}},"value":{"argumentTypes":null,"hexValue":"737472696e6732","id":63,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"105:9:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_799a81827817efd4e794a71804dd55521cf5563c764ff06e7c5bb2c2ac2b2596","typeString":"literal_string \"string2\""},"value":"string2"},"visibility":"public"},{"constant":false,"id":67,"name":"_bool2","nodeType":"VariableDeclaration","scope":68,"src":"120:26:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":65,"name":"bool","nodeType":"ElementaryTypeName","src":"120:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":{"argumentTypes":null,"hexValue":"66616c7365","id":66,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"141:5:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"},"visibility":"public"}],"scope":69,"src":"26:123:1"}],"src":"0:149:1"},"compiler":{"name":"solc","version":"0.4.21+commit.dfe3193c.Emscripten.clang"},"networks":{"4447":{"events":{},"links":{},"address":"0x2a504b5e7ec284aca5b6f49716611237239f0b97","transactionHash":"0x752e8d9df5be3f25c966420218bbd2721b7e5e906b44b129d71c51f36399a145"}},"schemaVersion":"2.0.0","updatedAt":"2018-04-23T21:30:52.106Z"}

/***/ }),

/***/ "./build/contracts/States.json":
/***/ (function(module, exports) {

module.exports = {"contractName":"States","abi":[{"constant":true,"inputs":[],"name":"_uint","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_string","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_bool","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}],"bytecode":"0x6060604052600080556040805190810160405280600681526020017f737472696e6700000000000000000000000000000000000000000000000000008152506001908051906020019061005392919061007f565b506001600260006101000a81548160ff021916908315150217905550341561007a57600080fd5b610124565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100c057805160ff19168380011785556100ee565b828001600101855582156100ee579182015b828111156100ed5782518255916020019190600101906100d2565b5b5090506100fb91906100ff565b5090565b61012191905b8082111561011d576000816000905550600101610105565b5090565b90565b610223806101336000396000f300606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632543135b1461005c5780639b267f09146100855780639e6ba9c214610113575b600080fd5b341561006757600080fd5b61006f610140565b6040518082815260200191505060405180910390f35b341561009057600080fd5b610098610146565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100d85780820151818401526020810190506100bd565b50505050905090810190601f1680156101055780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561011e57600080fd5b6101266101e4565b604051808215151515815260200191505060405180910390f35b60005481565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101dc5780601f106101b1576101008083540402835291602001916101dc565b820191906000526020600020905b8154815290600101906020018083116101bf57829003601f168201915b505050505081565b600260009054906101000a900460ff16815600a165627a7a72305820468bb7a05ede3150cbb794c095c94d2d8b6e79cab35cf9a0c313a764afd7b2aa0029","deployedBytecode":"0x606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632543135b1461005c5780639b267f09146100855780639e6ba9c214610113575b600080fd5b341561006757600080fd5b61006f610140565b6040518082815260200191505060405180910390f35b341561009057600080fd5b610098610146565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100d85780820151818401526020810190506100bd565b50505050905090810190601f1680156101055780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561011e57600080fd5b6101266101e4565b604051808215151515815260200191505060405180910390f35b60005481565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101dc5780601f106101b1576101008083540402835291602001916101dc565b820191906000526020600020905b8154815290600101906020018083116101bf57829003601f168201915b505050505081565b600260009054906101000a900460ff16815600a165627a7a72305820468bb7a05ede3150cbb794c095c94d2d8b6e79cab35cf9a0c313a764afd7b2aa0029","sourceMap":"26:114:2:-;;;68:1;48:21;;75:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;133:4;113:24;;;;;;;;;;;;;;;;;;;;26:114;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;","deployedSourceMap":"26:114:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;48:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;75:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;75:32:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;113:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;48:21;;;;:::o;75:32::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;113:24::-;;;;;;;;;;;;;:::o","source":"pragma solidity ^0.4.20;\n\ncontract States {\n    uint public _uint = 0;\n    string public _string = \"string\";\n    bool public _bool = true;\n}","sourcePath":"/home/ubuntu/dev/contract-state-util/contracts/States.sol","ast":{"absolutePath":"/home/ubuntu/dev/contract-state-util/contracts/States.sol","exportedSymbols":{"States":[80]},"id":81,"nodeType":"SourceUnit","nodes":[{"id":70,"literals":["solidity","^","0.4",".20"],"nodeType":"PragmaDirective","src":"0:24:2"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":80,"linearizedBaseContracts":[80],"name":"States","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":73,"name":"_uint","nodeType":"VariableDeclaration","scope":80,"src":"48:21:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":71,"name":"uint","nodeType":"ElementaryTypeName","src":"48:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"30","id":72,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"68:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"public"},{"constant":false,"id":76,"name":"_string","nodeType":"VariableDeclaration","scope":80,"src":"75:32:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"},"typeName":{"id":74,"name":"string","nodeType":"ElementaryTypeName","src":"75:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string storage pointer"}},"value":{"argumentTypes":null,"hexValue":"737472696e67","id":75,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"99:8:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_97fc46276c172633607a331542609db1e3da793fca183d594ed5a61803a10792","typeString":"literal_string \"string\""},"value":"string"},"visibility":"public"},{"constant":false,"id":79,"name":"_bool","nodeType":"VariableDeclaration","scope":80,"src":"113:24:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":77,"name":"bool","nodeType":"ElementaryTypeName","src":"113:4:2","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":{"argumentTypes":null,"hexValue":"74727565","id":78,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"133:4:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"visibility":"public"}],"scope":81,"src":"26:114:2"}],"src":"0:140:2"},"legacyAST":{"absolutePath":"/home/ubuntu/dev/contract-state-util/contracts/States.sol","exportedSymbols":{"States":[80]},"id":81,"nodeType":"SourceUnit","nodes":[{"id":70,"literals":["solidity","^","0.4",".20"],"nodeType":"PragmaDirective","src":"0:24:2"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":80,"linearizedBaseContracts":[80],"name":"States","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":73,"name":"_uint","nodeType":"VariableDeclaration","scope":80,"src":"48:21:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":71,"name":"uint","nodeType":"ElementaryTypeName","src":"48:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"30","id":72,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"68:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"public"},{"constant":false,"id":76,"name":"_string","nodeType":"VariableDeclaration","scope":80,"src":"75:32:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"},"typeName":{"id":74,"name":"string","nodeType":"ElementaryTypeName","src":"75:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string storage pointer"}},"value":{"argumentTypes":null,"hexValue":"737472696e67","id":75,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"99:8:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_97fc46276c172633607a331542609db1e3da793fca183d594ed5a61803a10792","typeString":"literal_string \"string\""},"value":"string"},"visibility":"public"},{"constant":false,"id":79,"name":"_bool","nodeType":"VariableDeclaration","scope":80,"src":"113:24:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":77,"name":"bool","nodeType":"ElementaryTypeName","src":"113:4:2","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":{"argumentTypes":null,"hexValue":"74727565","id":78,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"133:4:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"visibility":"public"}],"scope":81,"src":"26:114:2"}],"src":"0:140:2"},"compiler":{"name":"solc","version":"0.4.21+commit.dfe3193c.Emscripten.clang"},"networks":{"4447":{"events":{},"links":{},"address":"0x3d49d1ef2ade060a33c6e6aa213513a7ee9a6241","transactionHash":"0x5dd370031b22580356a4a6e861c80c22c36b4af277694c9035badf1b3ee0b3bd"}},"schemaVersion":"2.0.0","updatedAt":"2018-04-23T21:30:52.105Z"}

/***/ }),

/***/ "./index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contracts = __webpack_require__("./lib/contracts.js");

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

exports.default = getState;
// getState();

/***/ }),

/***/ "./lib/contracts.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wallet = exports.getEtherscanURL = exports.getNetworkId = exports.web3 = undefined;

var _regenerator = __webpack_require__("babel-runtime/regenerator");

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

var _truffleContract = __webpack_require__("truffle-contract");

var _truffleContract2 = _interopRequireDefault(_truffleContract);

var _States = __webpack_require__("./build/contracts/States.json");

var _States2 = _interopRequireDefault(_States);

var _MoreStates = __webpack_require__("./build/contracts/MoreStates.json");

var _MoreStates2 = _interopRequireDefault(_MoreStates);

var _web = __webpack_require__("./lib/web3.js");

var _truffle = __webpack_require__("./truffle.js");

var _truffle2 = _interopRequireDefault(_truffle);

var _es6Promisify = __webpack_require__("es6-promisify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/***/ }),

/***/ "./lib/web3.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupWeb3 = setupWeb3;

var _web = __webpack_require__("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _web3 = void 0;
function setupWeb3() {
  if (typeof _web3 !== 'undefined') {
    _web3 = new _web2.default(_web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    _web3 = new _web2.default(new _web2.default.providers.HttpProvider('http://localhost:9545'));
  }
  global.web3 = _web3;
}

/***/ }),

/***/ "./pages/SimpleTable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _jsxFileName = '/home/ubuntu/dev/contract-state-util/pages/SimpleTable.js';

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__("material-ui/styles");

var _Table = __webpack_require__("material-ui/Table");

var _Table2 = _interopRequireDefault(_Table);

var _materialUi = __webpack_require__("material-ui");

var _recompose = __webpack_require__("recompose");

var _contracts = __webpack_require__("./lib/contracts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = SimpleTable;

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _jsxFileName = '/home/ubuntu/dev/contract-state-util/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _SimpleTable = __webpack_require__("./pages/SimpleTable.js");

var _SimpleTable2 = _interopRequireDefault(_SimpleTable);

var _propTypes = __webpack_require__("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = __webpack_require__("./index.js");

var _index2 = _interopRequireDefault(_index);

var _contracts = __webpack_require__("./lib/contracts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ "./truffle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  networks: {
    testrpc: {
      host: 'localhost',
      gas: 4600000,
      port: 8545,
      network_id: '*'
    },
    develop: {
      host: 'localhost',
      gas: 4600000,
      port: 9545,
      network_id: '*'
    }
  }
};

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "es6-promisify":
/***/ (function(module, exports) {

module.exports = require("es6-promisify");

/***/ }),

/***/ "material-ui":
/***/ (function(module, exports) {

module.exports = require("material-ui");

/***/ }),

/***/ "material-ui/Table":
/***/ (function(module, exports) {

module.exports = require("material-ui/Table");

/***/ }),

/***/ "material-ui/styles":
/***/ (function(module, exports) {

module.exports = require("material-ui/styles");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "recompose":
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),

/***/ "truffle-contract":
/***/ (function(module, exports) {

module.exports = require("truffle-contract");

/***/ }),

/***/ "web3":
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map