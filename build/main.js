"use strict";
/**
 Type Assignment:
 When creating a variable, there are two main ways TypeScript assigns a type
 */
/**
Type Assignment:
Explicit: writing out the type

*/
let firstNameEx = "Thapelo";
let firstNumberEx = 10;
let statusEx = true || false;
console.log(firstNameEx);
console.log(firstNumberEx);
console.log(statusEx);
/**
Type Assignment:
Implicit: TypeScript will "guess" (infer) the type, based on the assigned value

T ypeScript may not always properly infer what the type of a variable may be.
In such cases, it will set the type to any which disables type checking.
*/
let firstNameIm = "Thapelo";
let firstNumberIm = 10;
let statusIm = true || false;
console.log(firstNameIm);
console.log(firstNumberIm);
console.log(statusIm);
