import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { vars } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: "https://1rpc.io/sepolia",
      accounts: [vars.get("PRIVATE_KEY")]
    },
    amoy: {
      chainId: 80002,
      url: "https://rpc-amoy.polygon.technology",
      accounts: [vars.get("PRIVATE_KEY")]
    }
  },
  sourcify: {
    enabled: true
  },
  etherscan: {
    apiKey: vars.get("ETHERSCAN_API_KEY"),
    customChains: [
      {
        network: "amoy",
        chainId: 80002,
        urls: {
          apiURL: "https://api-amoy.polygonscan.com/api",
          browserURL: "https://amoy.polygonscan.com"
        }
      }
    ]
  }
};

export default config;
