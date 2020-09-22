const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");
const assert = require('chai').assert;

describe('#middle', () => {
  it("returns empty array when given two value array", () => {
    assert.deepEqual(middle([1, 2]), [])
  });
  it("returns [2] when given [1,2,3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2])
  });

  it('returns [1] when given ["a", 1, 2]', () => {
    assert.deepEqual(middle(["a", 1, 2]), [1])
  });

  it("returns [2,3] when given [1,2,3,4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
  });

})