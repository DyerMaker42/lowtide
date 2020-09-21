const words = ["Yo Yo", "Lighthouse", "Labs"];
const assertEqual = require("../assertEqual")
const tail = require("../tail")
const assert = require("chai").assert;



// assertEqual(words.length, 3);
// assertEqual(tail([1]), []);
// assertEqual(tail([0,1,2]), [1,2]);

describe('#tail', () => {
  it(" returns empty array for array with one value", () => {
    assert.deepEqual(tail([1]), [])
  });

  it(" returns [1,2] array for [0,1,2]", () => {
    assert.deepEqual(tail([0, 1, 2]), [1, 2])
  });

})