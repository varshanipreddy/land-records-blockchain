module.exports = {
  rpc: {
    host: 'localhost',
    port: '8545'
 },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      from: "0xa7a3f060159856313DaA6626Ab24f0d58E986e8B", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4612388 // Gas limit used for deploys
    },
 ropsten:  {
     network_id: 3,
     host: "localhost",
     port:  8545,
     gas:   4612388
  }
},
};
