'use strict';

let myArray = [1,2,3,4,5,6,7,8,9];

let biggerThan5 = [];
for(let i in myArray){
  if(myArray[i] > 5)
    biggerThan5.push(myArray[i]);
}
console.log(biggerThan5);
//-------------------------------------------------------
// Functional Approach : filter
//-------------------------------------------------------

let biggerThanFiveFP = myArray.filter(x => x > 5);
console.log(biggerThanFiveFP);

let smallerThanFive = myArray.filter(x => x < 5);
console.log(smallerThanFive);

let five = myArray.filter(x => x === 5);
//let five = myArray.map(x => x === 5);
console.log(five);

let notFive = myArray.filter(x => x!== 5);
console.log(notFive);