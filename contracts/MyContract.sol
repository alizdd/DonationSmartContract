// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract MyContract{
    string value;
    constructor(){
        value = "Default Value";
    }
    function get() public view returns(string memory){
        return value;
    }

    function set(string memory _value) public{
        value = _value;
    }    
}

contract Next{
    uint public data= 30;
    uint internal iData = 10;

    function x() public returns (uint){
        data = 3; //internal access
        return data;
    }
}

contract Caller{
    Next next = new Next();
    function f() public view returns (uint){
        return next.data(); //External access
    }
}

contract D is Next{
    function y() public returns (uint){
        iData = 3;
        return iData;
    }
    
    function getResult() public view returns(uint){
        uint a=1; //Local variables
        uint b=2;
        uint result = a+b;
        return result;
    }
}