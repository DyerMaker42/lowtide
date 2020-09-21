const assertEqual = require('./assertEqual');

const head = function (input) {
  let result = input;
  //edge cases
  if (input === []) {
    return undefined
  } else {
    return result[0]
  }
};

module.exports = head;