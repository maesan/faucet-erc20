const { ethers } = require("hardhat");
require("dotenv").config()

const TOKEN_ADDRESS = process.env.TOKEN_ADDRESS;

async function main() {
  console.log("Deploy Faucet");
  const contract = await ethers.getContractFactory(
    "contracts/Faucet.sol:Faucet"
  );

  console.log("Deploying..");
  const faucet = await contract.deploy(
    TOKEN_ADDRESS
  );

  console.log("wait for deployment..");
  await faucet.waitForDeployment();

  console.log("Faucet deployed: ", await faucet.target);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  });

