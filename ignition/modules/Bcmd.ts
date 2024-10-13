import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BcmdModule = buildModule("BcmdModule", (m) => {
  const bcmd = m.contract("Bcmd", []);
  return { bcmd };
});

export default BcmdModule;
