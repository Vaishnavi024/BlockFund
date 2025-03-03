const hre = require("hardhat");
const { Contract } = require("zksync-web3");

async function main() {
  console.log("Deploying contract...");

  const Contract = await hre.ethers.getContractFactory("CrowdFunding");
  const contract = await Contract.deploy();

  //await contract.waitForDeployment(); ethher 6
  await contract.deployed(); //ether 5

  console.log("Contract deployed at:", contract.address);
//   console.log(`Delance contract deployed to ${contract.target}`); //ether 6
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//   //// Contract deployed at: 0x89fFB54Ceac3628382c519fA95cd518D71DFd53f