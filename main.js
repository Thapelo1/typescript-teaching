console.log('%c TypeScript!!', 'font-weight: bold;padding-bottom:10px ; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
/**
 Type Assignment:
 When creating a variable, there are two main ways TypeScript assigns a type
 */
/**
Type Assignment:
Explicit: writing out the type

*/
var firstNameEx = "Thapelo";
var firstNumberEx = 27;
var statusEx = true || false;
console.log("%c".concat(firstNameEx), "color: green");
console.log("%c".concat(firstNumberEx), "color: green");
console.log("%c".concat(statusEx), "color: green");
/**
Type Assignment:
Implicit: TypeScript will "guess" (infer) the type, based on the assigned value

T ypeScript may not always properly infer what the type of a variable may be.
In such cases, it will set the type to any which disables type checking.
*/
var firstNameIm = "Khumo";
var firstNumberIm = 4;
var statusIm = true || false;
console.log("%c".concat(firstNameIm), "color: red");
console.log("%c".concat(firstNumberIm), "color: red");
console.log("%c".concat(statusIm), "color: red");
