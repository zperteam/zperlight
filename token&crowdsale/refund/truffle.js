module.exports = {
	networks: {
		development: {
			host: "localhost",
			port: 7545,
			network_id: "*"
		},
		rinkeby: {
			host: "localhost",
			port: 8545,   // Different than the default below
			network_id: 4,
			gas: 4500000
		},
		ropsten: {
			host: "localhost",
			port: 8545,   // Different than the default below
			network_id: 3,
			gas: 4500000
		},
		live: {
			host: "localhost",
			port: 8545,
			network_id: "1",
			gas: 5500000,
			gasPrice: 20e9
		},
	},
	rpc: {
		host:"localhost",
		port:8545
	}
};
