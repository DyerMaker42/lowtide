const assertEqual = (actual, expected) => {
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

const findKeybyValue = (object, value) => {
  let results = undefined;
  for (let keys in object) {
    if (object.hasOwnProperty(keys)) {
      if (object[keys] === value) {
        results = keys;
      }
    }
  }
  return results
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeybyValue(bestTVShowsByGenre, "The Wire"), "drama")
assertEqual(findKeybyValue(bestTVShowsByGenre, "That '70s Show"), undefined)
assertEqual(findKeybyValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy")
assertEqual(findKeybyValue(bestTVShowsByGenre, "The Expanse"), "sci_fi")