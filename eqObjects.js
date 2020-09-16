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

// // test code
// assertEqual("LightHouse Labs", "Bootcamp");
// assertEqual(1, 2);
// assertEqual("LightHouse Labs", "LightHouse Labs");
// assertEqual(1, 1);

const eqObjects = (obj1,obj2) => {
  //check # of keys match
  const ob1Keys = Object.keys(obj1).length;
  const ob2Keys = Object.keys(obj2).length;
  if (ob2Keys !== ob1Keys){
    return false
  }
  for (let key in obj1){
    console.log("TEST",obj2[key], obj1[key])
    //check same keys in each
    if (!obj2[key]){
      return false;
    //check same key values in each
    } else if(obj1[key]!==obj2[key]){
      return false
    } else {
      
    }
  }
return true
}

const ab = {a: "1", b: "2"}
const ba = {b: "2", a: "1"}
assertEqual(eqObjects(ab,ba),true);
const abc = {a:1, b:"2", c:3 }
const abx = {a: 1, b: 2, x:3}
const aby = {a:1, b: 2, c:"y"}
const abt = {a: "1", b: "2", c:"3"}
assertEqual(eqObjects(abc,abc),true)
assertEqual(eqObjects(abc,aby),false)
assertEqual(eqObjects(abc,aby),false)
assertEqual(eqObjects(abc,aby),false)
assertEqual(eqObjects(ab,abt),false);
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd,dc),true);
assertEqual(eqObjects(cd,cd2), false);