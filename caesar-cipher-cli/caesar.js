const { ranges } = require('./constants');
const { circularAdd } = require('./utils');

function caesar(input, shift) {
  const result = [...input].map((ch, i) => {
    const codePoint = input.codePointAt(i);

    for (const range of ranges) {
      if (!ch.match(range.regex)) {
        continue;
      }
      const newCodePoint = circularAdd(
        codePoint,
        shift,
        range.start,
        range.size
      );
      return String.fromCodePoint(newCodePoint);
    }

    return ch;
  });

  return result.join('');
}

function encipher(input, shift) {
  return caesar(input, shift);
}

function decipher(input, shift) {
  return caesar(input, -shift);
}

module.exports = {
  encipher,
  decipher
};
