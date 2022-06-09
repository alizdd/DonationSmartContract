const Bagis = artifacts.require("Bagis");
const Caller = artifacts.require('Caller');
module.exports = function (deployer) {
  deployer.deploy(Bagis);
  deployer.deploy(Caller);
};
