module.exports = {
  networks: {
    testrpc: {
      host: 'localhost',
      gas: 4600000,
      port: 8545,
      network_id: '*',
    },
    develop: {
      host: 'localhost',
      gas: 4600000,
      port: 9545,
      network_id: '*',
    },
  },
};
