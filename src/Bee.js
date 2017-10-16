var Bee = function(food) {
	Grub.call(this, food);
	this.age = 5;
	this.color = 'yellow';
};

Bee.prototype = Object.create(Grub.prototype);

Bee.prototype.job = 'keep on growing';

Bee.prototype.constructor = Bee;

