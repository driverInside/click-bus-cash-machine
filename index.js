var cm = require('./app/cash-machine');

// Test 1
var testOne = 30.00;
console.log(cm.getCash(testOne)); // [20, 10]

// Test 2
var testTwo = 80.00;
console.log(cm.getCash(testTwo)); // [50, 20, 10]

// Test 5
var testFive = null;
console.log(cm.getCash(testFive)); // []

// Test 3
var testThree = 125.00;
console.log(cm.getCash(testThree)); // Throws NoteUnavailableException

// Test 4
var testFour = -130.00;
console.log(cm.getCash(testFour)); // Throws InvalidArgumentException
