import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BcmdModule = buildModule("BcmdModule", (m) => {
  const deployer = m.getAccount(0);
  const bcmd = m.contract("BlockChainMeetupDay", [deployer]);
  return { bcmd };
});

export default BcmdModule;
