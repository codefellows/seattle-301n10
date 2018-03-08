'use strict';

//*****basic selectors*****//

//element
  // vanillaJS
document.getElementsByTagName('p');
  // jQuery
jQuery('p');
$('p');

//class
  // vanillaJS
document.getElementsByClassName('theClassName');
  // jQuery
$('.theClassName');

//id
  // vanillaJS
document.getElementById('theIdName');
  // jQuery
$('#theIdName');

//parent descendent
$('nav li');

// parent > child
$('ul > li');

//attribute
$('input[name="value"]');
$('input[type="number"]');


//get text of the matched element(s)
let $h2text = $('h2').text();

//set text of the matched element(s)
$('h2').text('New header text');

//get the html of the matched element(s)
let $h2html = $('h2').html();

//set the html of the matched element(s)
// $('body').html('<p>This is a new paragraph</p>');

//get the data attribute of a p
$('p').data();

//set the data attribute of a p
$('p').attr('data-category', 'title');

$('p').data('type', 'paragraph');

//make a new <li> and append it to the <ul>
  // vanillaJS
    // 1. create the element
    // 2. give it content
    // 3. append it to the parent

  // jQuery
$('ul').append('<li>One<li>');
$('ul').append('<li>Two<li>');
$('ul').append('<li>Three<li>');

//make a clone
let $clonedUL = $('ul').clone();

//remove an element from the DOM, returns the removed element
$('h2').remove();

//empty out the contents of the element
$('body').empty();

//run a command as soon as the DOM loads
// $(document.ready(function() {
//   alert('DOM is ready');
// })

//shorthand
// $(function() {
//   alert('DOM is ready');
// })
