# Lowtide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install nicholask/lowtide`

**Require it:**

`const _ = require('nicholas/lowtide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(...)`: description
* `function2(...)`: description
* `function3(...)`: description
* `head`: returns the first element of array passed in
*  `tail`: returns all but the first element of an array passed in
*  `middle`: returns middle element of array passed in, if array length is an even number, then it returns the two middle elements, as an array
*  `assertArraysEqual`: returns assertion statement for two arrays
* `assertEqual`: returns an assertion statement of two values
*  `assertObjectsEqual`: checks to deeply determine if two objects have the exact key:value pairs
*  `countLetters`: returns number of letters in string passed in
*  `countOnly`: returns count of selected items
*  `eqArrays`: returns true if two arrays are equal
*  `eqObjects`: checks if objects are equal
*  `findKey`: returns key value that passes conditional
*  `findKeyByValue`: returns key name by value passed in
*  `letterPositions`: returns letter positons
*  `map`: modifies input array by a callback
*  `takeUntil`: returns all elements of an array until input value is satisfied
*  `without`: returns an array without elements as put in arguement