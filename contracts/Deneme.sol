// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

uint256 constant Total_Tickets=10; 

contract Tickets{

    address public owner=msg.sender;

    struct Ticket{
        uint256 price;
        address owner;
    }

    Ticket[Total_Tickets] public tickets;

    constructor(){
        for (uint256 index = 0; index < Total_Tickets; index++) {
            tickets[index].price=1e17; // 0.1 eth
            tickets[index].owner=address(0x0);
        }
    }

    //payable: bu fonksiyonu çağıran adrese para ödeme izni verir (msg.value)
    //external: sadece contract dışından çağırılabilir
    function buyTicket(uint256 _index) external payable{
        require(_index<Total_Tickets && _index >= 0);
        require(tickets[_index].owner == address(0x0));
        require(msg.value>=tickets[_index].price);
        tickets[_index].owner=msg.sender;
    }

}