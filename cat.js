function Cat(name) {
	this.name = name;
	this.stomach = [];
}

Cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse);
};

Cat.prototype.run = function() {
	console.log('Cat is running!');
};

module.exports = Cat;