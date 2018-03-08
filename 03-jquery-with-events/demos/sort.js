let myArray = [1, 5, 82, 112, 44];

myArray.sort();

myArray.sort(function (a, b) {
  console.log(myArray);
  return a - b;
})