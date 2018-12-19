function Animal (name) {
	this.name = name ;
// Assign localvariable name with passed in name
}
undefined
Animal.prototype.walk = function () {
	console.log(`${this.name} walks`);
/* Notice use of tilde ` here. It is not single quote
   this.name inside paranthesis is an expression that is evaluated at runtime.
*/
};
ƒ () {
	console.log(`${this.name} walks`);
/* Notice use of tilde ` here. It is not single quote 
   this.name inside paranthesis is an expression that is evaluated at runtime.
*/
}
function Cat (name) {
/*call is a method invoked onto a function, first argument is value of this and every subsequent argument is arg to function*/
	Animal.call(this, name);
	this.lives = 9;
}
undefined
/*Now inheriting properties from Animal to Cat object*/
Cat.prototype = Object.create(Animal.prototype);
Animal {}
/*Now pointing constructor of Cat object (Although cat is defined as function,it is an object, cos every function in JS is an object) to Cat */
Cat.prototype.constructor = Cat;
ƒ Cat (name) {
/*call is a method invoked onto a function, first argument is value of this and every subsequent argument is arg to function*/
	Animal.call(this, name);
	this.lives = 9;
}
Cat.prototype.meow = function () {
	console.log(`Meow!`);
}

ƒ () {
	console.log(`Meow!`);
}
const myCatBambi = new Cat('myCatBambi');
undefined
myCatBambi.meow();
VM1032:2 Meow!
undefined
myCatBambi.walk();
VM407:2 myCatBambi walks
undefined
myCatBambi.name();
VM1121:1 Uncaught TypeError: myCatBambi.name is not a function
    at <anonymous>:1:12
(anonymous) @ VM1121:1
myCatBambi.name;
"myCatBambi"
/*Since name is a proerty of myCatBambi it cannot be invoked*/
undefined
