const { ethers } = require("hardhat");
require("dotenv").config()

const FAUCET_ADDRESS = process.env.FAUCET_ADDRESS;

async function main() {
  console.log("Faucet");
  const contract = await ethers.getContractFactory(
    "contracts/Faucet.sol:Faucet"
  );

  console.log("attache..");
  const faucet = await contract.attach(
    FAUCET_ADDRESS
  );

  console.log("wait..");
  await faucet.faucet();

  console.log("Faucet finished");

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  });

