import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    hardhat: {},
    sonic: {
      url: process.env.NEXT_PUBLIC_SONIC_RPC || "https://rpc.blaze.soniclabs.com", // Sonic testnet RPC
      chainId: 57054, 
      accounts: process.env.METAMASK_PRIVATE_KEY ? [process.env.METAMASK_PRIVATE_KEY] : [], 
    },
  },
};

export default config;