/* globals artifacts */
const States = artifacts.require('./States.sol');
const MoreStates = artifacts.require('./MoreStates.sol');

module.exports = deployer => {
  deployer.then(async () => {
    await deployer.deploy(States);
  });
  deployer.then(async () => {
    await deployer.deploy(MoreStates);
  });
};
