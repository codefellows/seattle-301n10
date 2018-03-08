'use strict';

let myArray = [1,2,3,4,5,6,7,8,9];

//------------------------------------------------------
// Vinicio - simulate a reduce with a for loop
//------------------------------------------------------

let accumulator = 0; // vinicio - 0 is the initial value

for(let currentIndex in myArray){
  accumulator += myArray[currentIndex];
}
console.log(accumulator);

//------------------------------------------------------
// Vinicio - using reduce
//------------------------------------------------------

let totalUsingReduce = myArray.reduce(
  (accumulator,currentValue) => {
    return accumulator + currentValue;
  } ,0
);
console.log(totalUsingReduce);

let smallerThanFiveCount = myArray.reduce(
  (accumulator,currentValue) => {
    return currentValue < 5 ? accumulator + 1 : accumulator;
  },0
);

console.log(smallerThanFiveCount);

//------------------------------------------------------
// vinicio - reverse an array by using reduce
//------------------------------------------------------

let reversedArray = myArray.reduce(
  (accumulator,currentValue) => {
    accumulator.unshift(currentValue);
    return accumulator; // vinicio - preserving accumulator
  },[]
);
console.log(reversedArray);
console.log(myArray);

// vinciio - we start with an empty array because we are
//           building an array