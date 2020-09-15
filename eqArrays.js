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

const eqArrays = function(a,b) {
  if(a.length !== b.length){
    return false
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]){
      return false
    }
  }
  return true
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true)

eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
