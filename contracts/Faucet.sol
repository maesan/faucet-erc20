// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Faucet is Ownable {
    address immutable faucetToken;
    uint256 faucetAmount;
    mapping(address => uint256) lastClaimed;

    event Withdrawal(address account, uint256 amount);
    event Claimed(address account, uint256 amount);

    constructor(address tokenAddress) {
        require(tokenAddress != address(0), "Invalid token address");
        faucetToken = tokenAddress;
        faucetAmount = 10000 * (10 ** ERC20(tokenAddress).decimals());
    }

    function updateFaucetAmount(uint256 newAmount) external onlyOwner {
        require(newAmount > 0, "zero is not allowed");
        faucetAmount = newAmount;
    }

    function faucet() external {
        require(
            lastClaimed[_msgSender()] < block.timestamp - 24 * 60 * 60,
            "Tokens can only be claimed once every 24 hours."
        );

        IERC20(faucetToken).transfer(_msgSender(), faucetAmount);
        lastClaimed[_msgSender()] = block.timestamp;
        emit Claimed(_msgSender(), faucetAmount);
    }

    function withdraw() external onlyOwner {
        uint256 balance = IERC20(faucetToken).balanceOf(address(this));
        require(balance > 0, "token balance is zero");
        IERC20(faucetToken).transfer(_msgSender(), balance);

        emit Withdrawal(_msgSender(), balance);
    }
}
