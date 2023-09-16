const hre = require("hardhat");

async function main() {
  const requester1 = await hre.ethers.getContractFactory("requester1");
  const contract = await requester1.deploy(); //instance of contract

  await contract.deployed();
  console.log("Address of contract:", contract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});