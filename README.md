# Ethereum Smart Contract State Utility

---

## Quickstart

`npm install -g contract-state-util`

Run anywhere, just pass the location of your truffle config file, and the port you want to use

`contract-state-util -t ./truffle.js --port=3000`

---

### About

This tool will parse all of your contracts for variables, and output their current state on localhost:3000 in the format of:

```
Contract Name: ContractName
Name: varName | Type: varType | Inputs: inputTypes | Value: varValue

Base Contracts:
Contract Name: ContractName
```

Most of the logic is in `lib/contracts.js`.

It works by using a dynamic contract getter, `contractFunc` via `getContractState()`, on all defined truffle artifacts and invoking `.call()` on each variable that is public. However, its current incarnation does not work on advanced types such as `enums or structs`. `array` and `mapping` types are mocked until support is added to dynamically call via manual user request.

---

## Install

`npm install -g contract-state-util`

## Run

Deploy your contracts first:

`truffle develop`

In truffle's console:

`deploy`

#### Launch the state dashboard:

note: pass in your truffle's config location using the following:

```
Options:
  --version               Show version number                          [boolean]
  -t, --truffleConfigLoc  truffle.js location                         [required]
  --port                  port to launch state dashboard
  -h, --help              Show help                                    [boolean]
```

I.E. :

`contract-state-util -t ./truffle.js --port=3000`

## Examples

#### Example Input:

Contract: States.sol

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

Contract: MoreStates.sol

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

`contract-state-util -t ./truffle.js --port=3047`

via http://localhost:3047/ :

![image](https://user-images.githubusercontent.com/18407013/39646221-8e0b69fc-4f8f-11e8-8a7b-5338eaaa3dc0.png)
