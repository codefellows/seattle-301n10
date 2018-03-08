'use strict';
// $.get('data.json', data => console.log(data));

$.getJSON('invalid-data.json')
  .then((data => console.log(data)), (err => console.error(err)))


'use strict';

// PAY ATTENTION TO THE ORDER IN WHICH THE CONSOLE.LOG MESSAGES APPEAR IN THE BROWSER CONSOLE
// WHY ISN'T THE AJAX REQUEST TO THE POKEMON API APPEAR AS THE FIRST CONSOLE.LOG MESSAGE?
// THINK ABOUT THE ORDER OF THE CONSOLE.LOG MESSAGES IN THE LAST EXAMPLE

// can be used for any AJAX request
$.ajax({
  url: 'https://pokeapi.co/api/v2/pokemon/42',
  method: 'GET',
  success: function (data, message) {
    console.log(data);
  },
  fail: function (err) {
    console.error(err);
  }
})

// shorthand to specifically make a GET request
$.get('data.json', (data) => console.log(data));

$.get('data.json', (data) => console.log($.get('data.json')));

// this will work for a text file
$.get('sample.txt', (data) => console.log(data));

// go a step further and only accept JSON
// this will not work because it is not JSON
$.getJSON('sample.txt', (data) => console.log(data));

// will not fail if it receives properly formatted JSON, even if the file extension is not .json
$.getJSON('data.txt', (data) => console.log(data));

// will fail if if receives malformed JSON, even if the file extension is .json
// no error handling here, so it will fail silently with no feedback to the user
$.getJSON('invalid-data.json', (data) => console.log(data));

// this will skip the .then altogether and move past it to the .catch
$.getJSON('invalid-data.json')
  .then(data => console.log(data))
  .catch(err => console.error(err))

// larger example
// handle the error at every point so that, if an error occurs, you'll know where it occurred
$.getJSON('data.json')
  .then(data => console.log(data))
  .catch(err => console.error(err))
  .then(() => console.log('in the second .then'))
  .catch(err => console.error(err))
  .then(() => console.log('in the third .then'))
  .catch(err => console.error(err))