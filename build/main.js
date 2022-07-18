"use strict";
/**
 *  TypeScript Enums:
 * An enum is a special "class" that represents a group of constants (unchangeable variables).
 * Enums come in two flavors string and numeric.
 */
/**
 Numeric Enums - Default
 By default, enums will initialize the first value to 0 and add 1 to each additional value:
 */
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
let currentDirection = CardinalDirections.North;
console.log(currentDirection); // logs 0
/**
Numeric Enums - Initialized
By default, enums will initialize the first value to 0 and add 1 to each additional value:
*/
var CardinalDirections2;
(function (CardinalDirections2) {
    CardinalDirections2[CardinalDirections2["North"] = 1] = "North";
    CardinalDirections2[CardinalDirections2["East"] = 2] = "East";
    CardinalDirections2[CardinalDirections2["South"] = 3] = "South";
    CardinalDirections2[CardinalDirections2["West"] = 4] = "West";
})(CardinalDirections2 || (CardinalDirections2 = {}));
console.log(CardinalDirections2.North);
console.log(CardinalDirections2.East);
console.log(CardinalDirections2.South);
console.log(CardinalDirections2.West);
/**
Numeric Enums - Fully Initialized
You can assign unique number values for each enum value. Then the values will not incremented automatically:
*/
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes);
/**
String Enums
Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
*/
var CardinalDirectionsPartII;
(function (CardinalDirectionsPartII) {
    CardinalDirectionsPartII["North"] = "North";
    CardinalDirectionsPartII["East"] = "East";
    CardinalDirectionsPartII["South"] = "South";
    CardinalDirectionsPartII["West"] = "West";
})(CardinalDirectionsPartII || (CardinalDirectionsPartII = {}));
;
console.log(CardinalDirectionsPartII);
