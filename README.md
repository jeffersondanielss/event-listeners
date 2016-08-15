# Event listeners
> Search elements that have events. `[beta]`

### The problem

Not really understand how an application works by not knowing where the events are called, and what function they are calling.

### The idea

The idea is based on looking at the DOM elements that have events that have been added via javascript, notify the event and the function it performs visually.


### Usage

First include the script in your html document

```html
<script src="dist/event-listeners.min.js"></script>
```

To the elements that have events on the screen, run on the Chrome console:
```js
eventListeners.view()
```

To show only the elements in the console, run on the Chrome console:
```js
eventListeners.console()
```
