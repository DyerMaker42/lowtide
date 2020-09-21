const words = ["Yo Yo", "Lighthouse", "Labs"];
const assertEqual = require("../assertEqual")
const tail = require("../tail")


assertEqual(words.length, 3);
assertEqual(tail([1]), []);
assertEqual(tail([0,1,2]), [1,2]);