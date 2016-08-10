(function( app, document ){

  'use strict';

  // Get all the DOM elements
  app.getAllElements = () => {
    return Array.from(document.querySelectorAll('body *'));
  }

  // Filters only the elements that have event
  app.elementHasEvent = ( arr ) => {
    let hasEvent = arr.filter( ( curr ) => {
      let events = getEventListeners( curr );
      return Object.keys(events).length > 0
    });

    return hasEvent;
  }

  // Which takes or what events added to the element
  app.getEvent = ( arr ) => {

  }

  // Handle the function that is performed after the event
  app.getFunction = ( arr ) => {

  }

  //Displays the element, event and function.
  app.showEvents = () => {}

})( window, document );