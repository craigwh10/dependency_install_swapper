const sharedConfig = require('../../jest.config');
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    ...sharedConfig,
    "moduleNameMapper": {
        "^@chrome(.*)$": "<rootDir>/$1",
    } 
  };