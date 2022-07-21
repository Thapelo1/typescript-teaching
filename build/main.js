"use strict";
/**
 * TypeScript Functions:
 * TypeScript has a specific syntax for typing function parameters and return values.
 */
/**
 * Return Type:
 * The type of the value returned by the function can be explicitly defined.
 */
function fetchData() {
    return new Date().getTime();
}
console.log(fetchData);
function fetchMoreData() {
    return new Date().getTime().toLocaleString();
}
/**
 * Void return Type:
 * The type void can be used to indicate a function doesn't return any value..
 */
function fetchLyrics() {
    console.log(`Hello from the other side`);
}
/**
 * Parameters
    Function parameters are typed with a similar syntax as variable declarations.
 */
function multiply(a, b) {
    return a * b;
}
/**
 *Optional Parameters
 * By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.
 */
function add(a, b, c) {
    return a + b + (c || 0);
}
/**
 * Default Parameters
 * For parameters with default values, the default value goes after the type annotation:

 */
function pow(value, exponent = 10) {
    return value ** exponent;
}
/**
 * Named Parameters
    Typing named parameters follows the same pattern as typing normal parameters.
 */
function divide({ dividend, divisor }) {
    return dividend / divisor;
}
/**
 * Rest Parameters
    Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
 */
function add2(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(add);
const negateFunction = (value) => value * -1;
