// contracts/Contact.sol
//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Contact {
    event ContactUpdated(address indexed user, string name, string email);

    mapping(address => string) public contactNames;
    mapping(address => string) public contactEmails;

    function updateContact(string memory _name, string memory _email) public {
        contactNames[msg.sender] = _name;
        contactEmails[msg.sender] = _email;

        emit ContactUpdated(msg.sender, _name, _email);
    }
}
