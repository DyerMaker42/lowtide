
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

const words = ["Yo Yo", "Lighthouse", "Labs"];

const tail = function(input) {
  if (!input) {
    return [];
  }
  
  if (input.length >= 1) {
    return input.slice(1);
  } else if (input.length === 0) {
    return [];
  }
};

tail(words);
assertEqual(words.length, 3);
assertEqual(tail(), []);
assertEqual(tail([0,1,2]), [1,2]);