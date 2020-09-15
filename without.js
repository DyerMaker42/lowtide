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
  if (itemsToRemove === []) {
    return source
  } else if (eqArrays(source,itemsToRemove)) {
    return []
  }
  //check each element in items to remove array is within source array
  for (let i = 0; i < source.length; i ++){
    for (let j = 0; j< itemsToRemove.length; j++){
      console.log(i,j)
    }
  }
  // compare items between each

  //push items from source that don't match to output array

  return output
}

assertArraysEqual(without([1,2,3],[1,2,3]),[]);
assertArraysEqual(without([1,2,3],[1]),[2,3]);
assertArraysEqual(without)