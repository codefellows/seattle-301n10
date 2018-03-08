'use strict';

let numArray = [1, 2, 3, 4, 5];

// original for loop notation
// for(let i = 0; i < numArray.length; i++) {
//   console.log(numArray[i]);
// }

// for loop shorthand
// for(let i in numArray) {
//   console.log(numArray[i]);
// }

// define the function when you pass it in as a callback
numArray.forEach(function square(number) {
  console.log(number * number);
});

// define the callback function here... 
function square(number) {
  console.log(number * number);
}

// ...and call it here
numArray.forEach(square);