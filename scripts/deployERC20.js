const { ethers } = require("hardhat");

async function main() {
  console.log("Deploy TestToken");
  const contract = await ethers.getContractFactory(
    "contracts/TestToken.sol:TestToken"
  );

  console.log("Deploying..");
  const TestToken = await contract.deploy();

  console.log("wait for deployment..");
  await TestToken.waitForDeployment();

  console.log("TestToken deployed: ", await TestToken.target);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  });

