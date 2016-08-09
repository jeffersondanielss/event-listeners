(function( app, document ){

  'use strict';

  // Get all the DOM elements
  app.getAllElements = () => {
    var AllElements = Array.from(document.querySelectorAll('body *'));
    return AllElements;
  }

  // Filters only the elements that have event
  app.elementHasEvent = () => {}

  // Which takes or what events added to the element
  app.getEvent = () => {}

  // Handle the function that is performed after the event
  app.getFunction = () => {}

  //Displays the element, event and function.
  app.showEvents = () => {}

})( window, document );