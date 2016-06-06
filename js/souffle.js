function Souffle(options) {
	this.options = {
		duration: 10000,
		tick: 1000,
		recurring: null
	};
	if (typeof options === "object") {
		for (var key in options) {
			this.options[key] = options[key];
		}
	}
}

Souffle.prototype.start = function() {
	this.beginning = new Date();
	var souffle = this;
	this.interval = setInterval(function() {
		if (souffle.options.recurring) {
			souffle.options.recurring();
		}
		if (souffle.getTime() >= souffle.options.duration) {
			souffle.finish();
		}
	}, souffle.options.tick);
	return this;
};

Souffle.prototype.getTime = function() {
	this.elapsed = new Date() - this.beginning;
	return this.elapsed;
};

Souffle.prototype.pause = function() {
	this.finish();
	return this;
};

Souffle.prototype.unpause = function() {
	this.options.duration -= this.elapsed;
	this.start();
	return this;
};

Souffle.prototype.finish = function() {
	clearInterval(this.interval);
	this.interval = undefined;
	return this;
};