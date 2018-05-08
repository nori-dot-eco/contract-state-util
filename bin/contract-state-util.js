#!/usr/bin/env node
const shell = require('shelljs');
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

let utilDir = shell.which('contract-state-util').toString();
utilDir = utilDir.replace(
  'bin/contract-state-util',
  'lib/node_modules/contract-state-util'
);
exec(
  `node ${utilDir}/bin/setupArtifacts.js --truffleConfigLoc=${
    argv.truffleConfigLoc
  }`,
  error => {
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  }
);
exec(`npm run dev -- -p ${argv.port || 3010}`, { cwd: utilDir }, error2 => {
  console.log(`exec error 2: ${error2}`);
});
