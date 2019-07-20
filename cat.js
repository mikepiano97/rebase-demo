function Cat(name) {
	this.name = name;
	this.stomach = [];
}

Cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse);
};

Cat.prototype.sleep = function() {
	console.log('Cat is sleeping! Zzz');
};

module.exports = Cat;