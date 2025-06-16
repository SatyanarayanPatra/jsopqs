# JavaScript Output based Questions

## JavaScript OutPut questions mastery

### Topics Include

-   var, let, const & Scope

Variable Shadowing:
In JavaScript, variable shadowing occurs when a variable with the same name as a variable in a higher scope is declared in a lower scope.
It's a common practice but can lead to confusion if not used carefully because the inner variable will "shadow" the outer variable.
In first example, let a inside the if block shadows the outer let a, and they are two separate variables despite having the same name.

Illegal Shadowing:
This occurs when trying to shadow a variable using var within the same scope where that variable is already defined using let or const.
In second example, var b = "Bye"; is illegal shadowing because b is already declared using let in the same scope.

Hoisting:
In JavaScript, hoisting is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase.
However, only the declarations are hoisted, not the initializations or assignments.
In third example, console.log(a); will result in undefined because the variable a is hoisted to the top but not initialized until later in the code (var a = 10;).

Temporal Dead Zone (TDZ):
TDZ is a specific behavior related to variables declared using let and const. It refers to the period between the start of the block scope and the actual declaration of the variable.
During the TDZ, accessing the variable will result in a ReferenceError.
In fourth example, trying to log a, b, and c before their respective declarations will result in ReferenceError because they are in the TDZ until they are declared.

/-------------------------------------------------------------------------------------------------------------------------------/

-   map(), filter(), reduce()

Question 1: Array.map()
Explanation: The map() method in JavaScript creates a new array populated with the results of calling a provided function on every element in the calling array. It doesn't modify the original array but returns a new modified array based on the callback function's logic.

Question 2: Array.filter()
Explanation: The filter() method creates a new array with all elements that pass the test implemented by the provided function. It returns a filtered array based on the condition specified in the callback function, where only elements that satisfy the condition are included.

Question 3: Array.reduce()
Explanation: The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It's often used for aggregating data, such as calculating a sum, by iterating through the array and accumulating the results based on the logic in the callback function.

Question 4: Map Polyfill
Explanation: This code snippet adds a custom implementation of the map() method to the Array prototype. It mimics the functionality of the native map() method by iterating through the array and applying a callback function to each element to create a new array with the modified values.

Question 5: Filter Polyfill
Explanation: Similar to the Map Polyfill, this code adds a custom implementation of the filter() method to the Array prototype. It iterates through the array and applies a callback function to each element, returning a new array containing only the elements that meet the specified condition in the callback.

Question 6: Reduce Polyfill
Explanation: This snippet introduces a custom implementation of the reduce() method for arrays. It iterates through the array, applying a callback function that performs reduction or aggregation operations, similar to the native reduce() method, and returns the final accumulated result.

Question 7: map vs foreach
Explanation: This section compares the usage of map(), forEach(), and traditional for() loops for processing data in an array of student records. It demonstrates how each method can be used to achieve specific tasks, such as transforming data, filtering based on conditions, and aggregating information, highlighting the differences in syntax and approach between these array iteration methods.

/--------------------------------------------------------------------------------------------------------------------------------/

-   Functions
    Question 1: Function Code
    Explanation: This code defines a function square that calculates the square of a number and a function displaySquare that logs the square of 5 using the square function.

Question 2: What is IIFE?
Explanation: IIFE stands for Immediately Invoked Function Expression. It is a function that is executed immediately after it is defined. Example 1 shows a simple IIFE, while Example 2 demonstrates an IIFE with nested functions.

Question 3: Closure
Explanation: The code demonstrates closure where the inner function displayName has access to the variable name defined in the outer function init.

Question 4: Function Scope
Explanation: This code showcases function scope and variable shadowing. In Q-1, the mul function uses the variables num1 and num2 from the global scope. In Q-2, the setTimeout function inside a loop creates a closure but uses the global i variable.

Question 5: Function Hoisting
Explanation: Function hoisting allows calling a function before it is declared. The code demonstrates hoisting with a function declaration and how it behaves differently from non-hoisted functions.

Question 6: Params vs. Arguments
Explanation: This code defines a function fn with parameters a, x, y, and a rest parameter numbers, showcasing how parameters are declared and used in functions.

Question 7: Spread operator and rest operator
Explanation: The code shows the usage of the rest parameter in a function declaration and the spread operator to pass an array as individual arguments to the function.

Question 8: Callback
Explanation: This code demonstrates a callback function greeting being passed as an argument to the processUserInput function, allowing dynamic behavior based on user input.

Question 9: Arrow functions
Explanation: Arrow functions are shown in two forms: one with explicit return and braces, and another with implicit return when the function body is a single expression.

Question 10: this
Explanation: The code defines an object user with methods rc1 and rc2. rc1 uses an arrow function, resulting in this referring to the global object, while rc2 uses a regular function, allowing this to refer to the object itself.
