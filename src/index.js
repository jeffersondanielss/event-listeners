(function( app, document ){

  'use strict';

  // Get all the DOM elements
  app.getAllElements = () => {
    return Array.from(document.querySelectorAll('body *'));
  };

  // Filters only the elements that have event
  app.elementHasEvent = ( arr ) => {
    let hasEvent = arr.filter( ( curr ) => {
      let events = getEventListeners( curr );
      return Object.keys(events).length > 0;
    });

    return hasEvent;
  };

  // Takes the function and the event on the element
  app.getEvent = ( arr ) => {
    arr.map( ( curr ) => {
      let listeners = getEventListeners( curr );
      let events = Object.keys(listeners);

      console.log(`[element]: ${curr}`);

      events.map(( curr ) => {
        console.log(`[element.event]: ${listeners[curr][0].type}`);
        console.log(`[element.function.name]: ${listeners[curr][0].listener.name}`);
      });

    });
  };

  //Displays the element, event and function.
  app.showEvents = () => {};


  //Init functions
  app.eventListeners = {
    allElements: getAllElements(),

    elementWithEvent () {
      return app.elementHasEvent( this.allElements );
    },

    view () {
      getEvent( this.elementWithEvent() );
    },

    console () {
      this.elementWithEvent().map(( curr ) => {
        console.log( curr );
      });
    }
  };

})( window, document );