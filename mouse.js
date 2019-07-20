function Mouse(name) {
	this.name = name;
}

Mouse.prototype.sleep = function() {
	console.log('Mouse is sleeping!');
};

module.exports = Mouse;