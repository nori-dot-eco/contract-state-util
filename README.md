# Ethereum Smart Contract State Utility

This tool will parse all of your contracts for vairables, and out put their current state in the format of:

```
Contract Name: ContractName
Name: varName | Type: varType | Value: varValue
```

## Install

`yarn install`

## Run

Deploy your contracts first:

`truffle develop`

In truffle's console:

`deploy`

Then get their state:

`yarn babel-node index.js`

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
