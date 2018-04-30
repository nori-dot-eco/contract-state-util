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

    //enum
    // ???

    //array all types
    uint[] public _uintArray = [100];

    //struct
    // ???

    function setString(string change) public {
        _string = change;
    }
}