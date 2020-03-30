const fs = require('fs');
const { pipeline, Transform } = require('stream');

const { args, actions } = require('./args');
const caesar = require('./caesar');

function createInputStream(path) {
  return path ? fs.createReadStream(path) : process.stdin;
}

function createOutputStream(path) {
  return path ? fs.createWriteStream(path) : process.stdout;
}

function createCaesarTransformStream(action, shift) {
  const mapActionToHanlder = {
    [actions.encode]: caesar.encipher,
    [actions.decode]: caesar.decipher
  };

  const caesarHandler = mapActionToHanlder[action];
  if (caesarHandler === undefined) {
    throw Error(`not valid action: ${action}`);
  }

  return new Transform({
    transform(chunk, encoding, callback) {
      const data = caesarHandler(chunk.toString(), shift);
      this.push(data);
      callback();
    }
  });
}

function exitOnError(err) {
  console.error(err.toString());
  // eslint-disable-next-line no-process-exit
  process.exit(1);
}

function run() {
  try {
    args.parse(process.argv);
    const input = createInputStream(args.input);
    const output = createOutputStream(args.output);
    const transform = createCaesarTransformStream(args.action, args.shift);

    pipeline(input, transform, output, err => {
      if (err) {
        exitOnError(err);
      } else {
        console.log('Saved.');
      }
    });
  } catch (err) {
    exitOnError(err);
  }
}

run();
