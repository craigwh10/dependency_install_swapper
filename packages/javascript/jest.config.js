const sharedConfig = require('../../jest.config');
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    ...sharedConfig,
    "moduleNameMapper": {
        "^@js(.*)$": "<rootDir>/$1",
    } 
  };