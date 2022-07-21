/**
TypeScript Union Types:
Union types are used when a value can be more than a single type.
 */

type code = string | number

function printStatusCode(code: code) {
    return `My status code is ${code}.`
  }

console.log(printStatusCode(404));
console.log(printStatusCode('404'));