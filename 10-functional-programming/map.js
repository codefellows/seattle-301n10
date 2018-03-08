'use strict';

let myArray = [1,2,3,4,5,6,7,8,9];

// for(let i in myArray){
//   myArray[i] = myArray[i] + 1;
// }

const results = []; // vinicio - we need a copy to maintain
//                             immutability
for(let i in myArray){
  results.push(myArray[i] + 1);
}
console.log(myArray);
console.log(results);

// ------------------------------------------------------
// Using map
// ------------------------------------------------------

let mappedArray = myArray.map(x => x + 1);
console.log(myArray);
console.log(mappedArray);

let mappedArray2 = myArray.map(x => 'gregor and hound');
console.log(mappedArray2);

let chainedMap = myArray.map(x => x + 1).map(x => x - 1);
console.log(chainedMap);