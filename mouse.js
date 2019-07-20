function Mouse(name) {
	this.name = name;
}

Mouse.prototype.sleep = function() {
	console.log('Mouse is sleeping!');
};

Mouse.prototype.run = function() {
	console.log('Mouse is running...');
};

module.exports = Mouse;