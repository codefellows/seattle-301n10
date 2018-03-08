'use strict';

let neighborhoods = [];

// shorthand for constructor functions
// iterates over each key (or property) and creates the property for each instance
function Neighborhood(rawDataObject) {
  for(let key in rawDataObject) {
    this[key] = rawDataObject[key];
  }
}

Neighborhood.prototype.toHtml = function() {
  // 1. Get the template from the HTML 
  let $template = $('#neighborhood-template').html();
  // 2. Use Handlebars to compile the HTML, returns a function
  let templateRender = Handlebars.compile($template);
  // 3. Return the compiled HTML
  return templateRender(this);
}

neighborhoodDataSet.forEach(function(neighborhoodObject) {
  neighborhoods.push(new Neighborhood(neighborhoodObject));
})

neighborhoods.forEach(function(ourNewNeighborhoodObjects) {
  $('#neighborhoods').append(ourNewNeighborhoodObjects.toHtml());
})