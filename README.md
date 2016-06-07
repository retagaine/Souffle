# Souffle

Simple Javascript timer named after a dish I once had. Souffles run in milliseconds, and are typically off by that same order of magnitude.

## Examples

Initiating a new Souffle:
```
var timer = new Souffle();
```

Initiating a new Souffle with options:
```
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
```
var timer = new Souffle({
	duration: 10000,
	tick: 1000,
	recurring: null
});
```

## Methods

Starting a Souffle:
```
timer.start();
```

Getting elapsed time in ms:
```
timer.getTime();
```

Pausing and unpausing a Souffle:
```
timer.pause();
timer.unpause();
```

When a Souffle is finished:
```
timer.finish();
```
