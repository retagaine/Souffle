# Souffle

Simple Javascript timer named after a dish I once had. Souffles run in milliseconds, and are typically off by that same order of magnitude.

## Examples

Initiating a new Souffle:
```javascript
var timer = new Souffle();
```

Initiating a new Souffle with options:
```javascript
/*
	duration: duration of timer in ms
	tick: tick length in ms
	recurring: recurring function that runs every tick
*/
var timer = new Souffle({
	duration: 60000,
	tick: 500,
	recurring: function() {
		console.log("Tick.");
	}
});
```

A default Souffle is equivalent to:
```javascript
var timer = new Souffle({
	duration: 10000,
	tick: 1000,
	recurring: null
});
```

Turning a Souffle into a countdown timer:
```javascript
var timer = new Souffle({
	duration: 10000,
	tick: 1000,
	recurring: function() {
		console.log(timer.options.duration - timer.getTime());
	}
});
```

## Methods

Starting a Souffle:
```javascript
timer.start();
```

Getting elapsed time in ms:
```javascript
timer.getTime();
```

Pausing and unpausing a Souffle:
```javascript
timer.pause();
timer.unpause();
```

When a Souffle is finished:
```javascript
timer.finish();
```
