'use strict';

// let f1 = x => x + 1;
// let f2 = x => x === 'Gregor';
// let f3 = x => x < 100;
//------------------------------------
// Side effect?

let counter = 0;

let incrementCounter = () => {
  counter++;
  return counter;
};

console.log(incrementCounter());
console.log(incrementCounter());
console.log(incrementCounter());
//------------------------------------
// Immutability
//------------------------------------
let myArray = [1,2,3];

// let changeIndexByMutation = array =>{
//   array[0] = 'Gregor';
// };

// changeIndexByMutation(myArray); 
//let mutated = changeIndexWithoutMutations(myArray);
// console.log(myArray);
//------------------------------------

let changeIndexWithoutMutations = array => {
  let result = array.slice();
  result[0] = 'Gregor';
  return result;
};

let mutated = changeIndexWithoutMutations(myArray);
console.log(myArray);
console.log(mutated);

//------------------------------------
let incrementCounter_pure = (counter) => {
  counter++;
  return counter;
};

let pureCounter = 0;
pureCounter = incrementCounter_pure(pureCounter);
console.log(pureCounter);
pureCounter = incrementCounter_pure(pureCounter);
console.log(pureCounter);
pureCounter = incrementCounter_pure(pureCounter);
console.log(pureCounter);