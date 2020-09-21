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

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["a", "b", "c"]), "a");
assertEqual(head([]), undefined);