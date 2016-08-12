# Event listeners
> Search elements that have events. `[beta]`

### The problem

Not really understand how an application works by not knowing where the events are called, and what function they are calling.

### The idea

The idea is based on looking at the DOM elements that have events that have been added via javascript, notify the event and the function it performs visually.


### Usage

To the elements that have events on the screen, run:
```js
eventListeners.view()
```

To show only the elements in the console, run:
```js
eventListeners.console()
```
