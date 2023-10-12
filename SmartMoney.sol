// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FinancialSmartContract {
    address public owner; // The owner of the contract
    mapping(address => uint256) public balances; // User balances

    constructor() {
        owner = msg.sender;
    }

    // Function to deposit funds
    function deposit() external payable {
        require(msg.value > 0, "Deposit amount must be greater than 0");
        balances[msg.sender] += msg.value;
    }

    // Function to withdraw funds
    function withdraw(uint256 amount) external {
        uint256 balance = balances[msg.sender];
        require(balance >= amount, "Insufficient balance");
        balances[msg.sender] = balance - amount;
        payable(msg.sender).transfer(amount);
    }

    // Function to check the balance
    function getBalance() external view returns (uint256) {
        return balances[msg.sender];
    }

    // Only the owner can withdraw funds from the contract
    function ownerWithdraw(uint256 amount) external {
        require(msg.sender == owner, "Only the owner can call this function");
        require(address(this).balance >= amount, "Insufficient contract balance");
        payable(owner).transfer(amount);
    }
}
