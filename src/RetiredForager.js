var RetiredForagerBee = function(food, treasureChest) {
	ForagerBee.call(this, treasureChest);
	Grub.call(this, food);
	this.color = 'grey';
	this.age = 40;
	this.job = 'gamble';
	this.canFly = false;
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

RetiredForagerBee.prototype.forage = function() {
	return 'I am too old, let me play cards instead';
};

RetiredForagerBee.prototype.gamble = function(treasure) {
	this.treasureChest.push(treasure);
};

RetiredForagerBee.prototype.constructor = RetiredForagerBee;

