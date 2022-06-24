const ConvertLib = artifacts.require("ConvertLib");
const Pandemic_Recovery_System = artifacts.require("Pandemic_Recovery_System");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, Pandemic_Recovery_System);
  deployer.deploy(Pandemic_Recovery_System);
};
