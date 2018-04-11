'use strict'

const template = $('#actor-template').text();
const render = Handlebars.compile(template);

$.getJSON('/actors').then(actors => {
    actors.forEach(actor => {
        $('ul').append(render(actor));
    });
});