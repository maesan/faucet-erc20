// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestToken is ERC20 {
    uint8 constant DECIMALS = 18;
    uint256 constant TOTAL_SUPPLY = 10_000_000_000 * (10 ** DECIMALS);

    constructor() ERC20("Test ERC20", "TTT") {
        _mint(_msgSender(), TOTAL_SUPPLY);
    }

    function decimals() public pure override returns (uint8) {
        return DECIMALS;
    }
}
