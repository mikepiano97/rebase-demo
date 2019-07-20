function Mouse(name) {
	this.name = name;
}

Mouse.prototype.sleep = function() {
	console.log('Mouse is sleeping!');
}

Mouse.prototype.run = function() {
	console.log('Mouse is running...');
}

Mouse.prototype.jump = function() {
	console.log('Jumping mouse is an interesting idea!');
}

Mouse.prototype.fly = function() {
	console.log('Mouse open wings and fly away!');
}

Mouse.prototype.swim = function() {
	console.log('Mouse is on the pool, he is swimming!');
}

module.exports = Mouse;