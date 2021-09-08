# JS-Flappy-Bird
An implementation of Flappy Bird in Javascript

# How to use
The `Game` class is located in `js/game.js`. It is the main class of the game. To create a new game, first create a new instance of `Game` by providing an `CanvasRenderingContext2D` instance, for example:
```js
const ctx = document.getElementById('canvas').getContext('2d');
const game = new Game(ctx);
```
Then call the `start()` method. ***Note: `Game#start()` is async(for image loading purposes)***