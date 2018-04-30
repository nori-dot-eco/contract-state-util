#!/usr/bin/env node
const { exec } = require('child_process');
const argv = require('yargs')
  .usage('Usage: $0 [options]')
  .alias('t', 'truffleConfigLoc')
  .nargs('t', 1)
  .describe('t', 'truffle.js location')
  .describe('port', 'port to launch state dashboard')
  .demandOption(['t'])
  .help('h')
  .alias('h', 'help').argv;

exec(
  `node ./bin/setupArtifacts.js --truffleConfigLoc=${argv.truffleConfigLoc}`,
  error => {
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
    exec(`yarn next --port ${argv.port || 3010}`);
  }
);
