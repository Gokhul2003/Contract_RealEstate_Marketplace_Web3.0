require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

//FOR DEPLOYING LOCALLY
module.exports = {
  solidity: "0.8.18",
};

//DEPLOYING TO TEST NETWORKS LINK(Polygon)
const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "your polygon test net rpc url";
const NEXT_PUBLIC_PRIVATE_KEY ="your private key";

module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  // defaultNetwork: "matic",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};
