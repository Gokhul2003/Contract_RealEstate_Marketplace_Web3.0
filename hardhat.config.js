require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

//FOR DEPLOYING LOCALLY
module.exports = {
  solidity: "0.8.18",
};

//DEPLOYING TO TEST NETWORKS LINK(Polygon)
const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://polygon-mumbai.g.alchemy.com/v2/96KYrFzTS48tK0FkMW-jFQAhrSOFOTTl";
const NEXT_PUBLIC_PRIVATE_KEY ="712a247809f262f94b0aab1cfa3477dc3a55086dab55d2f57443df4f2c7d0c7c";

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
