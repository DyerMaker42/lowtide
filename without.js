const eqArrays = function (a, b) {
  if (a.length !== b.length) {
    return false
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false
    }
  }
  return true
}

const assertArraysEqual = function (actualArray, expectedArray) {
  if (eqArrays(actualArray, expectedArray)) {
    console.log(`😇😍✅Assertion Passed:${actualArray} === ${expectedArray}`);
  } else {
    console.log(`🤬😰🛑Assertion Failed:${actualArray} !== ${expectedArray}`);
  }
}


const without = function (source, itemsToRemove) {
  let output = [];
  let keep = true;
  if (itemsToRemove === []) {
    return source
  } else if (eqArrays(source, itemsToRemove)) {
    return output
  }
  //check each element in items to remove array is within source array

  for (let i = 0; i < source.length; i++) {
    keep = true
    for (let j = 0; j < itemsToRemove.length; j++) {

      if (source[i] === itemsToRemove[j]) {
        keep = false;
      }

    }
    if (keep) {
      output.push(source[i])
    }
  }
  // compare items between each

  //push items from source that don't match to output array

  return output
}
console.log(without([1, 2, 3], [1, 2]))
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["a", 1, 2], ["a"]), [1, 2]);


module.exports = without;