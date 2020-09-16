const assertEqual = function(actual, expected) {
  let result = "";

  if (actual === expected) {
    result = true;
  } else {
    result = false;
  }
  if (result) {
    console.log(`😇😍✅Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`🤬😰🛑Assertion Failed:${actual} !== ${expected}`);
  }

};

const countLetters = (input) => {
  let results = {};
  for (let letter of input) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

console.log(countLetters("hotwire"));
countLetters("sassafrass");
console.log(countLetters("sassafrass"));
countLetters("lighthouse");
console.log(countLetters("lighthouse"));
console.log(countLetters("lighthouse in the house"));
countLetters("123");