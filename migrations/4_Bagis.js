const Bagis = artifacts.require("KriptoBagis");
module.exports = function (deployer, network, addresses) {
  deployer.deploy(Bagis, addresses.slice(2,3));
};
