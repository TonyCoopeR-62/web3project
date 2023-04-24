require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepoila: {
      url: process.env.SEPOILA_URL,
      accounts: [process.env.ACCOUNT_KEY],
    }
  }
}