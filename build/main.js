"use strict";
/**
TypeScript Union Types:
Union types are used when a value can be more than a single type.
 */
function printStatusCode(code) {
    return `My status code is ${code}.`;
}
console.log(printStatusCode(404));
console.log(printStatusCode('404'));
