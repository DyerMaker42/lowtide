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

const eqArrays = function (a, b) {
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

// // test code
// assertEqual("LightHouse Labs", "Bootcamp");
// assertEqual(1, 2);
// assertEqual("LightHouse Labs", "LightHouse Labs");
// assertEqual(1, 1);

const eqObjects = (obj1, obj2) => {
  //check # of keys match
  const ob1Keys = Object.keys(obj1).length;
  const ob2Keys = Object.keys(obj2).length;
  if (ob2Keys !== ob1Keys) {
    return false;
  }
  for (let key in obj1) {
    //console.log("TEST",obj2[key], obj1[key])
    //check same keys in each
    if (!obj2[key]) {
      // console.log("if 1");
      return false;
    }

    //check same key values in each
    //comparing arrays if value is an array
    else if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      // console.log("if 2");
      // console.log(obj1[key]);
      if (!eqArrays(obj1[key], obj2[key])) {
        // console.log("if 3");
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      // console.log("if 4");
      return false;
    }
  }
  return true;
};


const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if ((eqObjects(actual, expected))) {
    console.log(`😇😍✅Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`🤬😰🛑Assertion Failed:${actual} !== ${expected}`);
  }
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: 1, b: "2", c: 3 };
const abx = { a: 1, b: 2, x: 3 };
const aby = { a: 1, b: 2, c: "y" };
const abt = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(ab, ba), true);
assertObjectsEqual(eqObjects(abc, abc), true);
assertObjectsEqual(eqObjects(abc, aby), false);
assertObjectsEqual(eqObjects(abc, aby), false);
assertObjectsEqual(eqObjects(abc, aby), false);
assertObjectsEqual(eqObjects(ab, abt), false);
assertObjectsEqual(eqObjects(cd, dc), true);
assertObjectsEqual(eqObjects(cd, cd2), false);