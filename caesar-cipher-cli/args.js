const { program } = require('commander');

const actions = {
  encode: 'encode',
  decode: 'decode'
};

program
  .passCommandToAction(false)
  .option('-i, --input  [path]', 'an input file   (default: stdin)')
  .option('-o, --output [path]', 'an output file  (default: stdout)')
  .requiredOption(
    '-a, --action <type>',
    'an action <encode|decode>',
    parseAction
  )
  .requiredOption('-s, --shift  <number>', 'a shift', parseShift);

function parseShift(value) {
  const integer = Number(value);
  if (!Number.isInteger(integer)) {
    throw new Error('shift value must be an integer');
  }
  return integer;
}

function parseAction(value) {
  const action = actions[value];
  if (action === undefined) {
    throw new Error(`not valid action: ${value}`);
  }
  return action;
}

module.exports = {
  args: program,
  actions
};
