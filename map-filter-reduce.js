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

//* 🔁 5. filter() does not mutate original
const nums = [10, 20, 30];
const result = nums.filter((n) => n > 15);
console.log(nums);
console.log(result);
//// Output: [10, 20, 30]
//// Output: [20, 30]
//! Filter does not change the original array; it creates a new array with elements that pass the test.

//* 🔁 6. No return in map()
const nums = [1, 2, 3];
const mapped = nums.map((n) => {
	n * 2;
});
console.log(mapped);
//// Output: [undefined, undefined, undefined]
//! If no return statement is used in the map function, it will return an array of `undefined` values, as the function does not explicitly return anything.

//* 🔁 7. Using index in map()
const result = ['a', 'b', 'c'].map((val, index) => index + val);
console.log(result);
//// Output: ['0a', '1b', '2c']
//! The second parameter of the map function is the index of the current element, which can be used to modify the output based on the position in the array.

//* 🔁 8. Filtering falsy values
const arr = [0, 1, false, true, '', 'hello'];
const filtered = arr.filter((el) => !!el);
console.log(filtered);
//// Output: [1, true, 'hello']
//! Using `Boolean` as the callback function in filter will remove all falsy values (0, false, '', null, undefined, NaN) from the array, leaving only truthy values.

//* 🔁 9. reduce() without initial values
const nums = [1, 2, 3];
const sum = nums.reduce((a, b) => a + b);
console.log(sum);
//// Output: 6
//! If no initial value is provided to reduce, it will use the first element of the array as the initial accumulator value, and start the iteration from the second element.

//* 🔁 10. Empty array with map()
const empty = [].map((x) => x * 2);
console.log(empty);
//// Output: []
//! Mapping an empty array will return an empty array, as there are no elements to apply the function to.

//* 🔁 11. Empty array with reduce()
const empty = [].reduce((a, b) => a + b, 0);
console.log(empty);
//// Output: 0
//! Reducing an empty array with an initial value will return that initial value, as there are no elements to process.

//* 🔁 12. Missing initial in reduce with empty array
const res = [].reduce((a, b) => a + b);
console.log(res);
//// Output: TypeError: Reduce of empty array with no initial value
//! If reduce is called on an empty array without an initial value, it will throw a TypeError, as there are no elements to reduce.

//* 🔁 13. Chaining map & filter
const nums = [1, 2, 3, 4];
const result = nums.map((n) => n * 2).filter((n) => n > 4);
console.log(result);
//// Output: [6, 8]
//! You can chain map and filter methods together to first transform the array and then filter the results based on a condition.

//* 🔁 14. Mapping to object
const nums = [1, 2];
const objArr = nums.map((n) => ({ num: n }));
console.log(objArr[0].num);
//// Output: 1
//! You can map an array to an array of objects, allowing you to create more complex data structures from simple arrays.

//* 🔁 15. Reference mutation in map
const arr = [{ a: 1 }, { a: 2 }];
const newArr = arr.map((obj) => {
	obj.a *= 10;
	return obj;
});
console.log(arr[0].a);
console.log(newArr[0].a);
//// Output: 10
//// Output: 10
//! When mapping over an array of objects, if you mutate the object properties, both the original and the new array will reflect those changes, as they reference the same objects in memory.

//* 🔁 16. Returning object in arrow map
const result = [1, 2].map((x) => ({ val: x }));
console.log(result);
//// Output: [{ val: 1 }, { val: 2 }]
//! When returning an object from a map function, the object will be created for each element in that array.

//* 🔁 17. Forgetting parentheses in object return
const result = [1, 2].map((x) => {
	val: x;
});
console.log(result);
//// Output: [undefined, undefined]
//! If you forget to use parentheses when returning an object in an arrow function, it will not return the object as expected, resulting in `undefined` for each element in the array.

//* 🔁 18. Using reduce to flatten
const nested = [[1], [2], [3]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat);
//// Output: [1, 2, 3]
//! You can use reduce to flatten an array of arrays by concatenating each sub-array into a single accumulator array.

//* 🔁 19. Reduce to object
const arr = ['a', 'b', 'c'];
const obj = arr.reduce((acc, cur, i) => {
	acc[i] = cur;
	return acc;
}, {});
console.log(obj);
//// Output: { '0': 'a', '1': 'b', '2': 'c' }
//! Reduce can also be used to transform an array into an object, where each element's index can be used as the key and the element itself as the value.

//* 🔁 20. Reduce with string concat
const chars = ['H', 'e', 'y'];
const word = chars.reduce((acc, cur) => acc + cur);
console.log(word);
//// Output: 'Hey'
//! Reduce can concatenate strings by accumulating each character into a single string, demonstrating its versatility in handling different data types.

//* 🔁 21. Callback receives correct args
const arr = [1, 2, 3];
const result = arr.map((num, index, array) => {
	return `Value: ${num}, Index: ${index}, Array Length: ${array.length}`;
});
console.log(result);
// Output: [ 'Value: 1, Index: 0, Array Length: 3', ...., ];

//* 🔁 22. filter() with index
const result = [10, 20, 30, 40].filter((val, i) => i % 2 === 0);
console.log(result);
//// Output: [10, 30]
//! The filter method can also take the index of the current element as a second argument, allowing you to filter based on the position of the element in the array.

//* 🔁 23. Reduce with boolean values
const arr = [true, true, false];
const result = arr.reduce((acc, val) => acc && val);
console.log(result);
//// Output: false
//! Reduce can be used with boolean values to determine if all elements in the array are true, returning true only if all elements pass the condition.

//* 🔁 24. Filter returns same length?
const arr = [1, 2, 3];
const res = arr.filter((n) => {
	n > 1;
});
console.log(res.length);
//// Output: 3
//! Filter does not guarantee that the resulting array will have the same length as the original array; it only includes elements that pass the test, which may result in a shorter array.

//* 🔁 25. Reduce Right vs Reduce
const arr = ['a', 'b', 'c'];
const left = arr.reduce((acc, cur) => acc + cur);
const right = arr.reduceRight((acc, cur) => acc + cur);
console.log(left, right);
//// Output: 'abc' 'cba'
//! ReduceRight processes the array from right to left, while reduce processes it from left to right, affecting the order of accumulation in the result.

//* 🔁 26. Reduce initial value impact
const arr = [1, 2];
const sum = arr.reduce((acc, val) => acc + val, 10);
console.log(sum);
//// Output: 13
//! The initial value provided to reduce affects the final result, as it serves as the starting point for the accumulation.

//* 🔁 27. Filter on undefined values
const arr = [undefined, null, 0, 1];
const res = arr.filter((x) => x);
console.log(res);
//// Output: [1]
//! Filter will remove all falsy values, including `undefined`, `null`, and `0`, leaving only truthy values in the resulting array.

//* 🔁 28. map() with empty slots
const arr = [1, , 3];
const res = arr.map((x) => x * 2);
console.log(res);
//// Output: [2, <1 empty item>, 6]
//! When mapping over an array with empty slots, the resulting array will also have empty slots where the original array had them, preserving the structure of the array.

//* 🔁 29. Sparse array with filter
const arr = [1, , 3];
const res = arr.filter((x) => true);
console.log(res);
//// Output: [1, 3]
//! Filter will ignore empty slots in a sparse array, resulting in an array that only contains the defined elements.

//* 🔁 30. Mapping with mutation
const arr = [1, 2, 3];
arr.map((val, i, a) => (a[i] = val * 10));
console.log(arr);
`//// Output: [10, 20, 30]
//! Mapping can mutate the original array if you modify the elements directly within the map function, but this is generally not recommended as it can lead to confusion and unexpected behavior.`;

//* 🔁 31. Reduce as counter
const letters = ['a', 'b', 'a'];
const count = letters.reduce((acc, char) => {
	acc[char] = (acc[char] || 0) + 1;
	return acc;
}, {});
console.log(count);
//// Output: { a: 2, b: 1 }
//! Reduce can be used to count occurrences of elements in an array, creating an object where keys are the elements and values are their counts.
