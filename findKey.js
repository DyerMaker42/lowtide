const assertEqual = (actual, expected)  => {
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

const findKey = (object, callback) => {
  for (let key in object) {
    
    console.log("1",object[key].stars)
    console.log("findKey -> callback(object[key].stars)", callback(object[key]))
      console.log("3",object[key])
    
    
  }
}


const test = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

findKey(test, x => x.stars === 2);