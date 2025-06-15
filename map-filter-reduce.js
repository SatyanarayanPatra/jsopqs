//* 🔁 1. Basic map() usage
const nums = [1, 2, 3];
const result = nums.map((n) => n * 2);
console.log(result);
//// Output: [2, 4, 6]
//! Map creates a new array with the results of calling a provided function on every element in the calling array.

//* 🔁 2. filter() returns what?
const nums = [1, 2, 3, 4];
const result = nums.filter((n) => n % 2 === 0);
console.log(result);
//// Output: [2, 4]
//! Filter creates a new array with all elements that pass the test implemented by the provided function.

//* 🔁 3. reduce() to sum
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
//// Output: 10
//! Reduce executes a reducer function on each element of the array, resulting in a single output value.

//* 🔁 4. map() returns new array?
const arr = [1, 2, 3];
const mapped = arr.map((x) => x * 2);
console.log(arr);
console.log(mapped);
//// Output: [1, 2, 3]
//// Output: [2, 4, 6]
//! Map does not modify the original array; it returns a new array with the results of the function applied to each element.
