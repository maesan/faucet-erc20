require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    local: {
      url: process.env.LOCAL_NODE_URL,
      accounts: [process.env.LOCAL_PRIVATE_KEY],
    },
    goerli: {
      url: process.env.GOERLI_NODE_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY],
      gasPrice: 2000000000
    },
  },
  solidity: "0.8.19",
};
