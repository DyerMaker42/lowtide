const eqArrays = function (a, b) {
  if (a&&b){
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
}

const assertArraysEqual = function (actualArray, expectedArray) {
  if (eqArrays(actualArray, expectedArray)) {
    console.log(`😇😍✅Assertion Passed:${actualArray} === ${expectedArray}`);
  } else {
    console.log(`🤬😰🛑Assertion Failed:${actualArray} !== ${expectedArray}`);
  }
}



const letterPositions = (sentence) => {
  const results = {};
  for (let i = 0; i < sentence.length; i++){
    if (sentence[i] !== " "){
      if (results[sentence[i]]){
        results[sentence[i]].push(i)
      } else {
        results[sentence[i]] = [i]
      }
    }
  }
  return results
}

console.log(letterPositions("lighthouse in the house"))
// assertArraysEqual(letterPositions('Hello')['l'], [2,3])
// assertArraysEqual(letterPositions('lighthouse in the house').i, [1,11])