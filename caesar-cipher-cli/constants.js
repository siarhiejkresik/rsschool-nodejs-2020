const latinSmallLetters = {
  start: 97,
  size: 26,
  regex: /[a-z]/
};

const latinCapitalLetters = {
  start: 65,
  size: 26,
  regex: /[A-Z]/
};

const ranges = [latinSmallLetters, latinCapitalLetters];

module.exports = { ranges };
