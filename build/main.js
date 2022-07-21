"use strict";
/**
 * TypeScript Casting
  There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.
  Casting is the process of overriding a type.
 */
/**
* Casting with as
A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.
*/
let x = 'hello';
console.log(x);
console.log(typeof x); // return string
/**
 * Casting with <>
  Using <> works the same as casting with as.
 */
let y = 'hello';
console.log(y.length);
console.log(typeof y);
/**
* Force casting
To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
*/
let z = 'hello';
console.log(x.length);
let myVar = "Hello world!";
console.log(myVar.length);
console.log(typeof myVar);
