import {
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("Bcmd", function () {
  async function deployKisaFixture() {
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const bcmd_factory = await hre.ethers.getContractFactory("Bcmd");
    const bcmd = await bcmd_factory.deploy();

    return { bcmd, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { bcmd, owner } = await loadFixture(deployKisaFixture);

      expect(await bcmd.owner()).to.equal(owner.address);
    });
  });

  describe("safeMint", function () {
    it("Should mint tokens", async function () {
      const { bcmd, owner } = await loadFixture(deployKisaFixture);
      const uri = "test_uri";
      await bcmd.safeMint(owner.address, uri);

      expect(await bcmd.balanceOf(owner.address)).to.equal(1);
      expect(await bcmd.ownerOf(0)).to.equal(owner.address);
    });
  });
});
