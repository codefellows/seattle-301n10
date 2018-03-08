'use strict';

var app = {};
// link to article about temporal dead zone
// https://stackoverflow.com/questions/33198849/what-is-the-temporal-dead-zone

(module => {
  let gary = 'Gary';
  let charlotte = 'Charlotte';
  
  module.gary = gary;
})(app)

console.log(app.gary);
console.log(app.charlotte);
