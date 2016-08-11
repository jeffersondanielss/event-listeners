'use strict';

(function (app, document) {

  'use strict';

  // Get all the DOM elements

  app.getAllElements = function () {
    return Array.from(document.querySelectorAll('body *'));
  };

  // Filters only the elements that have event
  app.elementHasEvent = function (arr) {
    var hasEvent = arr.filter(function (curr) {
      var events = getEventListeners(curr);
      return Object.keys(events).length > 0;
    });

    return hasEvent;
  };

  // Takes the function and the event on the element
  app.getEvent = function (arr) {
    arr.map(function (curr) {
      var listners = getEventListeners(curr);
      var events = Object.keys(listners);

      console.log('[element]: ' + curr);

      events.map(function (curr) {
        console.log('[element.event]: ' + listners[curr][0].type);
        console.log('[element.function.name]: ' + listners[curr][0].listener.name);
      });
    });
  };

  //Displays the element, event and function.
  app.showEvents = function () {};

  //Init functions
  app.eventListeners = function () {
    var allElements = getAllElements();
    var elementWithEvent = elementHasEvent(allElements);
    getEvent(elementWithEvent);
  };
})(window, document);
//# sourceMappingURL=all.js.map
