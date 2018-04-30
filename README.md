# Ethereum Smart Contract State Utility

---

## Quickstart

`yarn run dev --truffleConfigLoc=./truffle.js --port=3000`

---

### About

This tool will parse all of your contracts for vairables, and output their current state on localhost:3000 in the format of:

```
Contract Name: ContractName
Name: varName | Type: varType | Value: varValue
```

Most of the logic is in `lib/contracts.js`.

It works by using a dynamic contract getter, `contractFunc` via `getContractState()`, on all defined truffle artifacts and invoking `.call()` on each variable that is public. However, its current incarnation does not work on advanced types such as `enums, structs, arrays, or mappings`.

---

## Install

`yarn install`

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

`yarn run dev --truffleConfigLoc=./truffle.js --port=3000`

## Examples

#### Example Input:

Contract: States.sol

```solidity
pragma solidity ^0.4.20;

contract States {
    int public _int = 0;
    uint public _uint = 0;
    string public _string = "string";
    bool public _bool = true;
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
}
```

#### Example Output:

via localhost:3010 :

![image](https://user-images.githubusercontent.com/18407013/39417480-52610a08-4c09-11e8-94f3-512066fef4da.png)
