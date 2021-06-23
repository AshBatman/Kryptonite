const Vaccine_available_Migrations = artifacts.require("Vaccine_available");

module.exports = function (deployer) {
  deployer.deploy(Vaccine_available_Migrations);
};
