#!/usr/bin/env node
const shell = require('shelljs');
const { exec } = require('child_process');
const next = require('next');
const { createServer } = require('http');
const path = require('path');

process.env.NODE_ENV = 'production';

const dev = false;
const app = next({ dev, dir: path.resolve(__dirname, '..') });
const handle = app.getRequestHandler();

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
app.prepare().then(() => {
  createServer(handle).listen(argv.port || 3000, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
