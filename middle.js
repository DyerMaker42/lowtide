const eqArrays = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual =  (actualArray, expectedArray) => {
  if (eqArrays(actualArray, expectedArray)) {
    console.log(`😇😍✅Assertion Passed:${actualArray} === ${expectedArray}`);
  } else {
    console.log(`🤬😰🛑Assertion Failed:${actualArray} !== ${expectedArray}`);
  }
};

const middle = (input) => {
  let output = [];
  if (input.length <= 2) {
    return output;
  }
  const even = (input.length % 2 === 0);
  const mid = input.length / 2;
  //hypo 4 length , want index 1,2
  if (even) {
    output = [input[(mid) - 1], input[mid]];
  } else {
    //hypo 3 length want index 1
    output = [input[((input.length - 1) / 2)]];
  }
  console.log(output, "output");
  return output;
};

assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle(["a", 1, 2]), [1]);