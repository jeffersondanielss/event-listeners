'use strict';

(function (app, document) {

  'use strict';

  // Get all the DOM elements

  app.getAllElements = function () {
    var AllElements = Array.from(document.querySelectorAll('body *'));
    return AllElements;
  };

  // Filters only the elements that have event
  app.elementHasEvent = function () {};

  // Which takes or what events added to the element
  app.getEvent = function () {};

  // Handle the function that is performed after the event
  app.getFunction = function () {};

  //Displays the element, event and function.
  app.showEvents = function () {};
})(window, document);
//# sourceMappingURL=all.js.map
