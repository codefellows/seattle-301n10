'use strict';

// This is where we define the view for the "Home" page, in other words, the default view

const homeView = {};

homeView.init = function (ctx) {
  console.log(ctx);
  console.log('inside homeView.init');
  $('#contacts').empty();
  $('body').css('background-color', 'blue');
  $('#content').text('Hello world from the Home page').css('color', 'white');
}