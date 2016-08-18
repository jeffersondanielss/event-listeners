(( app, document ) => {

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

      app.showEvents(curr, events, listeners);
    });
  };

  // Get identity of element
  app.getIdentity = ( el ) => {
    let elClasse = el.getAttribute('class');
    let elId = el.getAttribute('id');
    let Identity = (elClasse) ? `.${elClasse}` : `#${elId}`;

    return Identity;
  }

  app.setStyle = ( el ) => {
    let style = `top: ${el.offsetTop + 7}px;`;
        style += `left: ${el.offsetLeft + 7}px;`;
        style += `position: absolute;`;
        style += `z-index: 999;`;
        style += `padding: 5px;`;
        style += `color: #0ea5a3;`;
        style += `background-color: #ace0df;`;
        style += `border: 1px solid #00C2C1;`;
        style += `font-size: 14px;`;
        style += `opacity: 0.8;`;

    return style;
  };

  //Displays the element, event and function.
  app.showEvents = ( el, events, listners ) => {
    let newElement = document.createElement('div');
    let id = app.getIdentity( el );
    let style = setStyle( el );

    newElement.setAttribute('class', 'event');
    newElement.setAttribute('style', style);

    events.map(( curr ) => {
      newElement.innerHTML = `${id} - ${listners[curr][0].type} - ${listners[curr][0].listener.name}()`;
    });

    document.getElementsByTagName('body')[0].appendChild(newElement);
  }


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
