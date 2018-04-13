'use strict';

var app = app || {};

(function(module) {
  const taskView = {};

  taskView.initIndexPage = function() {
    $('.container').hide();
    $('.task-view').show();
    console.log('init index page')
    app.Task.all.map(task => $('#task-list').append(task.toHtml()));
  }

  module.taskView = taskView;
})(app)

$(function() {
  console.log('in iffe');
  app.Task.fetchAll(app.taskView.initIndexPage);
})
