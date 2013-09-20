# loop <sup>0.0.1</sup>

[![Build Status](https://travis-ci.org/ngryman/loop.png)](https://travis-ci.org/ngryman/loop)
[![Dependency Status](https://gemnasium.com/ngryman/loop.png)](https://gemnasium.com/ngryman/loop)

Global loop handling using raf.js.

## Motivations

Sometimes you need a global loop for rendering, updating, polling...<br>
Sometimes you create several `setInterval` or chained `setTimeout`...<br>
Sometimes you don't know why, but you need a **LoOoOoOoOoOp**.

Here it is!

## Installation

|Bower|Jam|npm|
|-----|---|---|
|`bower install loop`|`jam install loop`|`npm install loop`|

## API

### `loop.on`

Subscribe to an event. For now only the `tick` event is emitted, every ~`16ms`.

```javascript
loop.on('tick', function() {
	// animate some cool stuff
});
```

### `loop.start`

Start the loop, that's it.

```javascript
loop.start();

// will emit ticks from now on.
```

### `loop.stop`

Stops the loop, as you guessed it.

```javascript
loop.stop();

// won't emit ticks until the loop has been restarted.
```

## Dependencies

Depends on [raf.js](https://github.com/ngryman/raf.js).
