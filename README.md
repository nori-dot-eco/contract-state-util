# Ethereum Smart Contract State Utility

This tool will parse all of your contracts for vairables, and out put their current state in the format of:

```
Contract Name: ContractName
Name: varName | Type: varType | Value: varValue
```

Most of the logic is in `lib/contracts.js`.

It works by using a dynamic contract getter, `contractFunc` via `getContractState()`, on all defined truffle artifacts and invoking `.call()` on each variable that is public. However, its current incarnation does not work on advanced types such as `enums, structs, arrays, or mappings`.

## Install

`yarn install`

## Run

Deploy your contracts first:

`truffle develop`

In truffle's console:

`deploy`

#### Launch the state dashboard:

note: pass in your truffle's config location using the following:

`yarn run dev --truffleConfigLoc=./truffle.js`

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

#### Example Output:

```
Contract Name:  States
Name: _uint | Type: uint256 | Value: BigNumber { s: 1, e: 0, c: [ 0 ] }
Name: _string | Type: string | Value: string
Name: _bool | Type: bool | Value: true
----
```
