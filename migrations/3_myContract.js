const MyContract = artifacts.require("MyContract");
const Caller = artifacts.require('Caller');
module.exports = function (deployer) {
  deployer.deploy(MyContract);
  deployer.deploy(Caller);
};
