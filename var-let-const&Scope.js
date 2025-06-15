//* 1. Var Hoisting
console.log(a);
var a = 10;
///// undefined for hoisting
//* Javascript hoists the declaration of variables declared with var to the top of their scope, but not their initialization, leading to undefined output before the assignment

//! 2. Let Temporal Dead Zone
console.log(b);
let b = 20;
//// ReferenceError: Cannot access 'b' before initialization
//* Javascript does not allow access to variables declared with let before they are initialized, leading to a ReferenceError

//! 3. Const Temporal Dead Zone
console.log(c);
const c = 30;
//// ReferenceError: Cannot access 'c' before initialization
//* Javascript does not allow access to variables declared with let or const before they are initialized, leading to a ReferenceError

//! 4. Scope Shadowing - var vs let
var x = 1;
{
	let x = 2;
	console.log(x);
}
console.log(x);
//// Output: 2
//// Output: 1
//* Javascript allows shadowing of variables declared with let inside a block, but not with var

//! 5. Re-declaration with var
var a = 5;
var a = 10;
console.log(a);
//// Output: 10
//* Javascript allows re-declaration of a variable declared with var, even in the same scope

//! 6. Re-declaration with let
let b = 5;
let b = 10;
console.log(b);
//// SyntaxError: Identifier 'b' has already been declared
//* Javascript allows re-declaration of a variable declared with var, but not with let

//! 7. Reassignment of const
const x = 100;
x = 200;
console.log(x);
//// TypeError: Assignment to constant variable
//* Javascript does not allow reassignment of a variable declared with const

//! 8. Const with Objects (Mutation allowed)
const obj = { name: 'John' };
obj.name = 'Jane';
console.log(obj.name);
//// Output: Jane
//* Javascript allows mutation of object properties even if the object is declared with const

//! 9. Block Scope with let
{
	let x = 50;
}
console.log(x);
//// ReferenceError: x is not defined
//* Variables declared with let are block-scoped, meaning they are only accessible within the block they are defined initialization

//! 10. Function Scope with var
function test() {
	var y = 10;
}
console.log(y);
//// ReferenceError: y is not defined
//* Variables declared with var are function-scoped, meaning they are accessible within the function they are defined in, but not outside of it

//! 11. Global Scope Leakage with var
function foo() {
	x = 10;
}
foo();
console.log(x);
//// Output: 10
//* Variables declared with var can leak into the global scope if not declared with var, let, or const, leading to potential conflicts and bugs

//! 12. Block Scope Shadowing
let x = 10;
{
	let x = 20;
	{
		let x = 30;
		console.log(x);
	}
}
//// Output: 30
//* Variables declared with let can be shadowed in nested blocks, allowing for different values in different scopes

//! 13. Loop Scope with var
for (var i = 0; i < 3; i++) {
	setTimeout(() => console.log(i), 100);
}
//// Output: 3 3 3
//* Variables declared with var in a loop will have the same value when accessed asynchronously, leading to unexpected results

//! 14. Loop Scope with let
for (let i = 0; i < 3; i++) {
	setTimeout(() => console.log(i), 100);
}
//// Output: 0 1 2
//* Variables declared with let in a loop will have their own scope, allowing for the correct value to be logged when accessed asynchronously

//! 15. Hoisting of var inside function

function demo() {
	console.log(a);
	var a = 5;
}
demo();
//// Output: undefined
//* Variables declared with var inside a function are hoisted to the top of the function scope, leading to undefined output before the assignment
