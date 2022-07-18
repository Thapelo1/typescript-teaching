/**
 *  TypeScript Enums:
 * An enum is a special "class" that represents a group of constants (unchangeable variables).
 * Enums come in two flavors string and numeric.
 */


/**
 Numeric Enums - Default
 By default, enums will initialize the first value to 0 and add 1 to each additional value:
 */

 enum CardinalDirections {
    North,
    East,
    South,
    West
  }

  let currentDirection = CardinalDirections.North; 
  console.log(currentDirection); // logs 0

  /**
 Numeric Enums - Initialized
 By default, enums will initialize the first value to 0 and add 1 to each additional value:
 */

 enum CardinalDirections2 {
    North = 1,
    East,
    South,
    West
  }

  console.log(CardinalDirections2.North);
  console.log(CardinalDirections2.East);
  console.log(CardinalDirections2.South);
  console.log(CardinalDirections2.West);

    /**
Numeric Enums - Fully Initialized
 You can assign unique number values for each enum value. Then the values will not incremented automatically:
 */

 enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }

  console.log(StatusCodes);

  
    /**
String Enums
 Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
 */
 enum CardinalDirectionsPartII {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
  };

  console.log(CardinalDirectionsPartII);