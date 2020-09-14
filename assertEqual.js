// function implementation

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

// test code
assertEqual("LightHouse Labs", "Bootcamp");
assertEqual(1, 2);
assertEqual("LightHouse Labs", "LightHouse Labs");
assertEqual(1, 1);