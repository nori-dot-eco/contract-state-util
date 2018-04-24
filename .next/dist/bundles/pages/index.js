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

module.exports = {"contractName":"MoreStates","abi":[{"constant":true,"inputs":[],"name":"_int2","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_bool2","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_uint2","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_string2","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}],"bytecode":"0x60606040526001600055600180556040805190810160405280600781526020017f737472696e67320000000000000000000000000000000000000000000000000081525060029080519060200190610058929190610084565b506000600360006101000a81548160ff021916908315150217905550341561007f57600080fd5b610129565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100c557805160ff19168380011785556100f3565b828001600101855582156100f3579182015b828111156100f25782518255916020019190600101906100d7565b5b5090506101009190610104565b5090565b61012691905b8082111561012257600081600090555060010161010a565b5090565b90565b61025d806101386000396000f300606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806353e95af914610067578063a2e7fe8a14610090578063b6e6f255146100bd578063c23ca580146100e6575b600080fd5b341561007257600080fd5b61007a610174565b6040518082815260200191505060405180910390f35b341561009b57600080fd5b6100a361017a565b604051808215151515815260200191505060405180910390f35b34156100c857600080fd5b6100d061018d565b6040518082815260200191505060405180910390f35b34156100f157600080fd5b6100f9610193565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561013957808201518184015260208101905061011e565b50505050905090810190601f1680156101665780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60005481565b600360009054906101000a900460ff1681565b60015481565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102295780601f106101fe57610100808354040283529160200191610229565b820191906000526020600020905b81548152906001019060200180831161020c57829003601f168201915b5050505050815600a165627a7a72305820d84786d6e9ea2a0cfd7a5659512146f871ca78129f13769fe005d0703cb4f44c0029","deployedBytecode":"0x606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806353e95af914610067578063a2e7fe8a14610090578063b6e6f255146100bd578063c23ca580146100e6575b600080fd5b341561007257600080fd5b61007a610174565b6040518082815260200191505060405180910390f35b341561009b57600080fd5b6100a361017a565b604051808215151515815260200191505060405180910390f35b34156100c857600080fd5b6100d061018d565b6040518082815260200191505060405180910390f35b34156100f157600080fd5b6100f9610193565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561013957808201518184015260208101905061011e565b50505050905090810190601f1680156101665780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60005481565b600360009054906101000a900460ff1681565b60015481565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102295780601f106101fe57610100808354040283529160200191610229565b820191906000526020600020905b81548152906001019060200180831161020c57829003601f168201915b5050505050815600a165627a7a72305820d84786d6e9ea2a0cfd7a5659512146f871ca78129f13769fe005d0703cb4f44c0029","sourceMap":"26:149:1:-;;;71:1;52:20;;99:1;78:22;;106:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;167:5;146:26;;;;;;;;;;;;;;;;;;;;26:149;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;","deployedSourceMap":"26:149:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;52:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;146:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;78:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;106:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;106:34:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;52:20;;;;:::o;146:26::-;;;;;;;;;;;;;:::o;78:22::-;;;;:::o;106:34::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o","source":"pragma solidity ^0.4.20;\n\ncontract MoreStates {\n    int public _int2 = 1;\n    uint public _uint2 = 1;\n    string public _string2 = \"string2\";\n    bool public _bool2 = false;\n}","sourcePath":"/home/ubuntu/dev/contract-state-util/contracts/MoreStates.sol","ast":{"absolutePath":"/home/ubuntu/dev/contract-state-util/contracts/MoreStates.sol","exportedSymbols":{"MoreStates":[71]},"id":72,"nodeType":"SourceUnit","nodes":[{"id":58,"literals":["solidity","^","0.4",".20"],"nodeType":"PragmaDirective","src":"0:24:1"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":71,"linearizedBaseContracts":[71],"name":"MoreStates","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":61,"name":"_int2","nodeType":"VariableDeclaration","scope":71,"src":"52:20:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_int256","typeString":"int256"},"typeName":{"id":59,"name":"int","nodeType":"ElementaryTypeName","src":"52:3:1","typeDescriptions":{"typeIdentifier":"t_int256","typeString":"int256"}},"value":{"argumentTypes":null,"hexValue":"31","id":60,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"71:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"visibility":"public"},{"constant":false,"id":64,"name":"_uint2","nodeType":"VariableDeclaration","scope":71,"src":"78:22:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":62,"name":"uint","nodeType":"ElementaryTypeName","src":"78:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"31","id":63,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"99:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"visibility":"public"},{"constant":false,"id":67,"name":"_string2","nodeType":"VariableDeclaration","scope":71,"src":"106:34:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"},"typeName":{"id":65,"name":"string","nodeType":"ElementaryTypeName","src":"106:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string storage pointer"}},"value":{"argumentTypes":null,"hexValue":"737472696e6732","id":66,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"131:9:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_799a81827817efd4e794a71804dd55521cf5563c764ff06e7c5bb2c2ac2b2596","typeString":"literal_string \"string2\""},"value":"string2"},"visibility":"public"},{"constant":false,"id":70,"name":"_bool2","nodeType":"VariableDeclaration","scope":71,"src":"146:26:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":68,"name":"bool","nodeType":"ElementaryTypeName","src":"146:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":{"argumentTypes":null,"hexValue":"66616c7365","id":69,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"167:5:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"},"visibility":"public"}],"scope":72,"src":"26:149:1"}],"src":"0:175:1"},"legacyAST":{"absolutePath":"/home/ubuntu/dev/contract-state-util/contracts/MoreStates.sol","exportedSymbols":{"MoreStates":[71]},"id":72,"nodeType":"SourceUnit","nodes":[{"id":58,"literals":["solidity","^","0.4",".20"],"nodeType":"PragmaDirective","src":"0:24:1"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":71,"linearizedBaseContracts":[71],"name":"MoreStates","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":61,"name":"_int2","nodeType":"VariableDeclaration","scope":71,"src":"52:20:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_int256","typeString":"int256"},"typeName":{"id":59,"name":"int","nodeType":"ElementaryTypeName","src":"52:3:1","typeDescriptions":{"typeIdentifier":"t_int256","typeString":"int256"}},"value":{"argumentTypes":null,"hexValue":"31","id":60,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"71:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"visibility":"public"},{"constant":false,"id":64,"name":"_uint2","nodeType":"VariableDeclaration","scope":71,"src":"78:22:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":62,"name":"uint","nodeType":"ElementaryTypeName","src":"78:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"31","id":63,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"99:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"visibility":"public"},{"constant":false,"id":67,"name":"_string2","nodeType":"VariableDeclaration","scope":71,"src":"106:34:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"},"typeName":{"id":65,"name":"string","nodeType":"ElementaryTypeName","src":"106:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string storage pointer"}},"value":{"argumentTypes":null,"hexValue":"737472696e6732","id":66,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"131:9:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_799a81827817efd4e794a71804dd55521cf5563c764ff06e7c5bb2c2ac2b2596","typeString":"literal_string \"string2\""},"value":"string2"},"visibility":"public"},{"constant":false,"id":70,"name":"_bool2","nodeType":"VariableDeclaration","scope":71,"src":"146:26:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":68,"name":"bool","nodeType":"ElementaryTypeName","src":"146:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":{"argumentTypes":null,"hexValue":"66616c7365","id":69,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"167:5:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"},"visibility":"public"}],"scope":72,"src":"26:149:1"}],"src":"0:175:1"},"compiler":{"name":"solc","version":"0.4.21+commit.dfe3193c.Emscripten.clang"},"networks":{"4447":{"events":{},"links":{},"address":"0xf25186b5081ff5ce73482ad761db0eb0d25abfbf","transactionHash":"0xc338f5aacc500ce9d3741f0c3c67d31f618822b17d6144217f62b0931c496c6d"}},"schemaVersion":"2.0.0","updatedAt":"2018-04-24T14:06:03.980Z"}

/***/ }),

/***/ "./build/contracts/States.json":
/***/ (function(module, exports) {

module.exports = {"contractName":"States","abi":[{"constant":true,"inputs":[],"name":"_uint","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_string","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_bool","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_int","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"change","type":"string"}],"name":"setString","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x60606040526000805560006001556040805190810160405280600681526020017f737472696e67000000000000000000000000000000000000000000000000000081525060029080519060200190610058929190610084565b506001600360006101000a81548160ff021916908315150217905550341561007f57600080fd5b610129565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100c557805160ff19168380011785556100f3565b828001600101855582156100f3579182015b828111156100f25782518255916020019190600101906100d7565b5b5090506101009190610104565b5090565b61012691905b8082111561012257600081600090555060010161010a565b5090565b90565b610384806101386000396000f30060606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632543135b146100725780637fcaf6661461009b5780639b267f09146100f85780639e6ba9c214610186578063af45869e146101b3575b600080fd5b341561007d57600080fd5b6100856101dc565b6040518082815260200191505060405180910390f35b34156100a657600080fd5b6100f6600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506101e2565b005b341561010357600080fd5b61010b6101fc565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561014b578082015181840152602081019050610130565b50505050905090810190601f1680156101785780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561019157600080fd5b61019961029a565b604051808215151515815260200191505060405180910390f35b34156101be57600080fd5b6101c66102ad565b6040518082815260200191505060405180910390f35b60015481565b80600290805190602001906101f89291906102b3565b5050565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102925780601f1061026757610100808354040283529160200191610292565b820191906000526020600020905b81548152906001019060200180831161027557829003601f168201915b505050505081565b600360009054906101000a900460ff1681565b60005481565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102f457805160ff1916838001178555610322565b82800160010185558215610322579182015b82811115610321578251825591602001919060010190610306565b5b50905061032f9190610333565b5090565b61035591905b80821115610351576000816000905550600101610339565b5090565b905600a165627a7a72305820cee10d2bd8c20916bebc79b011909c99927a53564dcfae8f5670d6e54d9887020029","deployedBytecode":"0x60606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632543135b146100725780637fcaf6661461009b5780639b267f09146100f85780639e6ba9c214610186578063af45869e146101b3575b600080fd5b341561007d57600080fd5b6100856101dc565b6040518082815260200191505060405180910390f35b34156100a657600080fd5b6100f6600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506101e2565b005b341561010357600080fd5b61010b6101fc565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561014b578082015181840152602081019050610130565b50505050905090810190601f1680156101785780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561019157600080fd5b61019961029a565b604051808215151515815260200191505060405180910390f35b34156101be57600080fd5b6101c66102ad565b6040518082815260200191505060405180910390f35b60015481565b80600290805190602001906101f89291906102b3565b5050565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102925780601f1061026757610100808354040283529160200191610292565b820191906000526020600020905b81548152906001019060200180831161027557829003601f168201915b505050505081565b600360009054906101000a900460ff1681565b60005481565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102f457805160ff1916838001178555610322565b82800160010185558215610322579182015b82811115610321578251825591602001919060010190610306565b5b50905061032f9190610333565b5090565b61035591905b80821115610351576000816000905550600101610339565b5090565b905600a165627a7a72305820cee10d2bd8c20916bebc79b011909c99927a53564dcfae8f5670d6e54d9887020029","sourceMap":"26:345:2:-;;;66:1;48:19;;107:1;87:21;;229:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;287:4;267:24;;;;;;;;;;;;;;;;;;;;26:345;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;","deployedSourceMap":"26:345:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;87:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;297:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;229:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;229:32:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;267:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;48:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;87:21;;;;:::o;297:72::-;356:6;348:7;:14;;;;;;;;;;;;:::i;:::-;;297:72;:::o;229:32::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;267:24::-;;;;;;;;;;;;;:::o;48:19::-;;;;:::o;26:345::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o","source":"pragma solidity ^0.4.20;\n\ncontract States {\n    int public _int = 0;\n    //8 ->256\n    uint public _uint = 0;\n    //8 ->256\n    //address\n    //bytes1..32\n    //enum\n    //array all types\n    //mapping all types\n    //struct\n    string public _string = \"string\";\n    bool public _bool = true;\n    function setString(string change) public {\n        _string=change;\n    }\n}","sourcePath":"/home/ubuntu/dev/contract-state-util/contracts/States.sol","ast":{"absolutePath":"/home/ubuntu/dev/contract-state-util/contracts/States.sol","exportedSymbols":{"States":[96]},"id":97,"nodeType":"SourceUnit","nodes":[{"id":73,"literals":["solidity","^","0.4",".20"],"nodeType":"PragmaDirective","src":"0:24:2"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":96,"linearizedBaseContracts":[96],"name":"States","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":76,"name":"_int","nodeType":"VariableDeclaration","scope":96,"src":"48:19:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_int256","typeString":"int256"},"typeName":{"id":74,"name":"int","nodeType":"ElementaryTypeName","src":"48:3:2","typeDescriptions":{"typeIdentifier":"t_int256","typeString":"int256"}},"value":{"argumentTypes":null,"hexValue":"30","id":75,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"66:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"public"},{"constant":false,"id":79,"name":"_uint","nodeType":"VariableDeclaration","scope":96,"src":"87:21:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":77,"name":"uint","nodeType":"ElementaryTypeName","src":"87:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"30","id":78,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"107:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"public"},{"constant":false,"id":82,"name":"_string","nodeType":"VariableDeclaration","scope":96,"src":"229:32:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"},"typeName":{"id":80,"name":"string","nodeType":"ElementaryTypeName","src":"229:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string storage pointer"}},"value":{"argumentTypes":null,"hexValue":"737472696e67","id":81,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"253:8:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_97fc46276c172633607a331542609db1e3da793fca183d594ed5a61803a10792","typeString":"literal_string \"string\""},"value":"string"},"visibility":"public"},{"constant":false,"id":85,"name":"_bool","nodeType":"VariableDeclaration","scope":96,"src":"267:24:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":83,"name":"bool","nodeType":"ElementaryTypeName","src":"267:4:2","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":{"argumentTypes":null,"hexValue":"74727565","id":84,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"287:4:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"visibility":"public"},{"body":{"id":94,"nodeType":"Block","src":"338:31:2","statements":[{"expression":{"argumentTypes":null,"id":92,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":90,"name":"_string","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":82,"src":"348:7:2","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":91,"name":"change","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":87,"src":"356:6:2","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"348:14:2","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":93,"nodeType":"ExpressionStatement","src":"348:14:2"}]},"documentation":null,"id":95,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"setString","nodeType":"FunctionDefinition","parameters":{"id":88,"nodeType":"ParameterList","parameters":[{"constant":false,"id":87,"name":"change","nodeType":"VariableDeclaration","scope":95,"src":"316:13:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},"typeName":{"id":86,"name":"string","nodeType":"ElementaryTypeName","src":"316:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string storage pointer"}},"value":null,"visibility":"internal"}],"src":"315:15:2"},"payable":false,"returnParameters":{"id":89,"nodeType":"ParameterList","parameters":[],"src":"338:0:2"},"scope":96,"src":"297:72:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":97,"src":"26:345:2"}],"src":"0:371:2"},"legacyAST":{"absolutePath":"/home/ubuntu/dev/contract-state-util/contracts/States.sol","exportedSymbols":{"States":[96]},"id":97,"nodeType":"SourceUnit","nodes":[{"id":73,"literals":["solidity","^","0.4",".20"],"nodeType":"PragmaDirective","src":"0:24:2"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":96,"linearizedBaseContracts":[96],"name":"States","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":76,"name":"_int","nodeType":"VariableDeclaration","scope":96,"src":"48:19:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_int256","typeString":"int256"},"typeName":{"id":74,"name":"int","nodeType":"ElementaryTypeName","src":"48:3:2","typeDescriptions":{"typeIdentifier":"t_int256","typeString":"int256"}},"value":{"argumentTypes":null,"hexValue":"30","id":75,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"66:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"public"},{"constant":false,"id":79,"name":"_uint","nodeType":"VariableDeclaration","scope":96,"src":"87:21:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":77,"name":"uint","nodeType":"ElementaryTypeName","src":"87:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"30","id":78,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"107:1:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"public"},{"constant":false,"id":82,"name":"_string","nodeType":"VariableDeclaration","scope":96,"src":"229:32:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"},"typeName":{"id":80,"name":"string","nodeType":"ElementaryTypeName","src":"229:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string storage pointer"}},"value":{"argumentTypes":null,"hexValue":"737472696e67","id":81,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"253:8:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_97fc46276c172633607a331542609db1e3da793fca183d594ed5a61803a10792","typeString":"literal_string \"string\""},"value":"string"},"visibility":"public"},{"constant":false,"id":85,"name":"_bool","nodeType":"VariableDeclaration","scope":96,"src":"267:24:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":83,"name":"bool","nodeType":"ElementaryTypeName","src":"267:4:2","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":{"argumentTypes":null,"hexValue":"74727565","id":84,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"287:4:2","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"visibility":"public"},{"body":{"id":94,"nodeType":"Block","src":"338:31:2","statements":[{"expression":{"argumentTypes":null,"id":92,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":90,"name":"_string","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":82,"src":"348:7:2","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":91,"name":"change","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":87,"src":"356:6:2","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"348:14:2","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":93,"nodeType":"ExpressionStatement","src":"348:14:2"}]},"documentation":null,"id":95,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"setString","nodeType":"FunctionDefinition","parameters":{"id":88,"nodeType":"ParameterList","parameters":[{"constant":false,"id":87,"name":"change","nodeType":"VariableDeclaration","scope":95,"src":"316:13:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},"typeName":{"id":86,"name":"string","nodeType":"ElementaryTypeName","src":"316:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string storage pointer"}},"value":null,"visibility":"internal"}],"src":"315:15:2"},"payable":false,"returnParameters":{"id":89,"nodeType":"ParameterList","parameters":[],"src":"338:0:2"},"scope":96,"src":"297:72:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":97,"src":"26:345:2"}],"src":"0:371:2"},"compiler":{"name":"solc","version":"0.4.21+commit.dfe3193c.Emscripten.clang"},"networks":{"4447":{"events":{},"links":{},"address":"0x345ca3e014aaf5dca488057592ee47305d9b3e10","transactionHash":"0x754afd83d99e5534d02532edca537a73baa63dd668009dcbf13d9d2c995c50da"}},"schemaVersion":"2.0.0","updatedAt":"2018-04-24T14:06:03.979Z"}

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
                    // const b = await stateValue;
                    // console.log('tryna log sv', b);

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
                  case 'end':
                    return _context8.stop();
                }
              }
            }, _callee8, _this2, [[1, 13]]);
          }));

          return function (_x5) {
            return _ref8.apply(this, arguments);
          };
        }()
        // return stateNamesAndVals;
        );
        contractStates.push(Object.create({
          contractName: _contract.contractName,
          state: stateNamesAndVals
        }));
        stateNamesAndVals = [];
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
              // if (args){
              //   const [Contract, cid] = await Promise.all([
              //     Wallet.getContract(contractName)
              //   ]);

              // }

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

  console.debug('render ui');
  return _react2.default.createElement(
    'div',
    { className: classes.root, __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      }
    },
    contractStates && contractStates.map(function (n) {
      return _react2.default.createElement(
        _materialUi.Card,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        },
        _react2.default.createElement(
          _materialUi.CardContent,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          },
          _react2.default.createElement(
            _Table2.default,
            { className: classes.table, __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              }
            },
            _react2.default.createElement(
              _Table.TableHead,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              },
              _react2.default.createElement(
                _materialUi.Typography,
                { variant: 'title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                  }
                },
                n.contractName
              ),
              _react2.default.createElement(
                _Table.TableRow,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                  }
                },
                _react2.default.createElement(
                  _Table.TableCell,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 41
                    }
                  },
                  'Name'
                ),
                _react2.default.createElement(
                  _Table.TableCell,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 42
                    }
                  },
                  'Type'
                ),
                _react2.default.createElement(
                  _Table.TableCell,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 43
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
                  lineNumber: 46
                }
              },
              n.state.map(function (e) {
                return _react2.default.createElement(
                  _Table.TableRow,
                  { key: e.name, __source: {
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
                    e.name
                  ),
                  _react2.default.createElement(
                    _Table.TableCell,
                    { numeric: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                      }
                    },
                    e.type
                  ),
                  _react2.default.createElement(
                    _Table.TableCell,
                    { numeric: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
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

// function shallowEqual(objA, objB) {
//   // console.log('entering hte shallow equal');
//   if (objA === objB) {
//     console.log(objA, objB);
//     return true;
//   }

//   if (
//     typeof objA !== 'object' ||
//     objA === null ||
//     typeof objB !== 'object' ||
//     objB === null
//   ) {
//     console.log(
//       typeof objA !== 'object',
//       objA === null,
//       typeof objB !== 'object',
//       objB === null,
//       objA,
//       objB
//     );
//     return false;
//   }

//   const keysA = Object.keys(objA);
//   const keysB = Object.keys(objB);

//   if (keysA.length !== keysB.length) {
//     console.log(keysA.length, keysB.length);
//     return false;
//   }

//   // Test for A's keys different from B.
//   const bHasOwnProperty = hasOwnProperty.bind(objB);
//   for (let i = 0; i < keysA.length; i++) {
//     if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
//       // console.log(
//       //   'returning false i guess',
//       //   bHasOwnProperty(keysA[i]),
//       //   objA[keysA[i]],
//       //   objB[keysA[i]]
//       // );
//       return false;
//     }
//   }
//   console.log('returning true i guess');
//   return true;
// }

// function shallowCompare(instance, nextProps) {
//   return shallowEqual(instance, nextProps);
// }

var SimpleTable = (0, _recompose.compose)((0, _recompose.lifecycle)({
  componentWillReceiveProps: function componentWillReceiveProps() {
    var contractStates = this.props.contractStates;

    this.setState({
      contractStates: contractStates
    });

    this.forceUpdate();
  }
}))(SimpleTableUI);
SimpleTable.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = SimpleTable;

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      contractStates: null
    }, _this.updateBlockchainState = function () {
      // const contractState = Wallet.getContractState();
      // this.setState({});
      console.debug('updating blockchain');
      // const contractState = Wallet.getContractState();
      // this.setState({
      //   contractStates: contractState,
      // });

      clearTimeout(_this.updateTimeout);

      _this.forceUpdate();
      _this.updateTimeout = setTimeout(_this.updateBlockchainState, 3000);

      console.debug('done updating blockchain');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var contractState = _contracts.Wallet.getContractState();
      this.setState({
        contractStates: contractState
      });
      this.updateBlockchainState();
      console.debug('mounted');
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.debug('unmount');
      clearTimeout(this.updateTimeout);
    }
    // componentDidUpdate() {
    //   this.setState({
    //     contractStates: Wallet.getContractState(),
    //   });
    //   // this.forceUpdate();
    // }

  }, {
    key: 'render',
    value: function render() {
      console.log('in index render');
      return _react2.default.createElement(
        'div',
        { className: 'App', __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        },
        _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          },
          _react2.default.createElement(
            'header',
            { className: 'App-header', __source: {
                fileName: _jsxFileName,
                lineNumber: 53
              }
            },
            _react2.default.createElement(
              'h1',
              { className: 'App-title', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54
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
              lineNumber: 57
            }
          },
          _react2.default.createElement(_SimpleTable2.default, { contractStates: _contracts.Wallet.getContractState(), __source: {
              fileName: _jsxFileName,
              lineNumber: 58
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