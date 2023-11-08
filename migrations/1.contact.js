// 2_deploy_contract.js
const Contact = artifacts.require("Contact");

module.exports = function (deployer) {
  deployer.deploy(Contact);
};
