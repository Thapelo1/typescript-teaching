/**
 *  TypeScript Type Aliases and Interfaces:
 TypeScript allows types to be defined separately from the variables that use them.
 Aliases and Interfaces allows types to be easily shared between different variables/objects
 */


 /**
Type Aliases
 */

type CarYear = number;
type CarType = string;
type CarModel = string;
type CarFeature = string[];

type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel,
    features: CarFeature
}

const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";
const carFeatures: CarFeature = ["Bluetooth", "AndroidCarPlay", "AppleCarPlay"];

const car: Car = {
    year: carYear,
    type: carType,
    model: carModel,
    features:carFeatures
}

const {year, type, model, features } = car;

console.log(year);
console.log(type);
console.log(model);
console.log(features);

 /**
Interfaces
 */

interface Rectangle {
    height: number,
    width: number
  }
  
  const rectangle: Rectangle = {
    height: 20,
    width: 10
  };

  const {height, width} = rectangle;

  console.log(height)
  console.log(width);

   /**
Extending Interfaces
 */

interface Rectangle {
    height: number,
    width: number
  }

  interface ColoredRectangle extends Rectangle {
    color: string
  }

  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  }
  


