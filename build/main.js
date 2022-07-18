"use strict";
/**
    TypeScript Special Types:
    TypeScript has special types that may not refer to any specific type of data.
 */
/**
Type: any:
any is a type that disables type checking and effectively allows all types to be used.

any can be a useful way to get past errors since it disables type checking, but
TypeScript will not be able provide type safety, and tools which rely on type data, s
such as auto completion, will not work. Remember, it should be avoided at "any" cost...
*/
/**
    Example without any
*/
let u = true;
u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
/**
   Example with any
*/
let v = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type
/**
Type: unknown
unknown is a similar, but safer alternative to any.

TypeScript will prevent unknown types from being used
*/
let w = 1;
w = "string"; // no error
/**
Type: never
never effectively throws an error whenever it is defined.
*/
/**
TType: undefined & null:
undefined and null are types that refer to the JavaScript primitives undefined and null respectively.
*/
let y = undefined;
let z = null;
/**
TypeScript Special Types
*/ 
