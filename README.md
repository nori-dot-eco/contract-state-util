# Ethereum Smart Contract State Utility

## Quickstart

### If you experience issues with this package finding the correct contracts, clone the repo locally, and use `npm link`

> npm install -g contract-state-util

> contract-state-util -t ./truffle.js --port=3000

Run the above anywhere, just pass the location of your app's [truffle](http://truffleframework.com/).js config file

---

## About

This tool will parse all of your contracts for variables, and output their current state on localhost:3000 in the following format:

```
Contract States
___________________________________________________________

Contract Name: ExampleContractName (Node ID: 1234)

State Name | Type    | Inputs                    | Value
-----------------------------------------------------------
varName    | varType | {index: {inName, inType}} | varValue

Base Contracts:
-----------------------------------------------------------
Contract Name: ExampleBaseContractName

___________________________________________________________
```

##### Note: Node ID above is taken from the contract's artifact.

### How it works:

First, [setup-artifacts.js](bin/setup-artifacts.js) grabs the artifacts from your `build/contracts` folder and creates a file called `lib/artifacts.js` which exports all of your artifacts for consumption by [contracts.js](lib/contracts.js).

The [contracts.js](lib/contracts.js) magic works as follows:

* imports all artifacts from the previous step's generated `lib/artifacts.js`
* [truffle-contract's](https://github.com/trufflesuite/truffle-contract) `contract()` function is used to create a contract object for each artifact
* When the dashboard is loaded it sets each contract object's provider as the current [web3](https://github.com/ethereum/web3.js/) provider
* `getContractState()` invokes a dynamic contract getter function, `contractFunc`, on each contract leveraging `.call()` on each variable that is public. This is done by parsing the arifacts for variables and then invoking the call function on the contract object previously created.

Note: the current incarnation does not work on advanced types such as `enums or structs`. Additionally, `array` and `mapping` types are mocked (a static index or key is passed in by default and only fetches that key/index). Support is needed to add dynamic calling or manual user calling.

---

## Install

> npm install -g contract-state-util

---

## Run

#### Prerequisites:

* A [MetaMask](https://metamask.io) enabled browser to use the web UI
* A [Truffle](http://truffleframework.com/) application with some smart contracts

### Deploy your contracts:

> truffle develop

In truffle's console:

> deploy

### Launch the smart contract state inspector dashboard:

From the command-line:

> contract-state-util

```
Options:
  --version               Show version number                          [boolean]
  -t, --truffleConfigLoc  truffle.js location                         [required]
  --port                  port to launch state dashboard
  -h, --help              Show help                                    [boolean]
```

#### For example:

> contract-state-util -t ./truffle.js --port=3000

## Examples

#### Example Input:

Contract: [States.sol](contracts/States.sol)

```solidity
pragma solidity ^0.4.20;

contract States {

    //int 8 ->256
    int8 public _int8 = 0;
    int public _int = 0;

    //uint8 ->256
    uint8 public _uint8 = 0;
    uint public _uint = 0;

    //address
    address public _address = this;

    //bytes1..32
    bytes public _bytes = "0x0";

    //string
    string public _string = "string";

    //bool
    bool public _bool = true;

    //mapping all types
    mapping(uint => uint) public _mappingUintToUint;
    mapping(int => uint) public _mappingInttoUint;
    mapping(bytes32 => uint) public _mappingBytes32ToUint;
    mapping(address => uint) public _mappingAddressToUint;
    mapping(bool => uint) public _mappingBoolToUint;
    mapping(bool => bool) public _mappingBoolToBool;
    mapping(bool => address) public _mappingBoolToAddr;
    mapping(bool => mapping(uint=>uint)) public _mappingBoolToMapping;

    function States() public {
        _mappingBoolToMapping[true][0] = 1;
    }

    function setString(string change) public {
        _string = change;
    }
}
```

Contract: [MoreStates.sol](contracts/MoreStates.sol)

```solidity
pragma solidity ^0.4.20;

contract MoreStates {
    int public _int2 = 1;
    uint public _uint2 = 1;
    string public _string2 = "string2";
    bool public _bool2 = false;
    address public _address2 = this;
    bytes public _bytes2 = "0x0";
}
```

#### Example Output:

Using:

> contract-state-util -t ./truffle.js --port=3047

Then navigate to http://localhost:3047/ to get output similar to the following:

![image](https://user-images.githubusercontent.com/18407013/39646221-8e0b69fc-4f8f-11e8-8a7b-5338eaaa3dc0.png)