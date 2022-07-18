"use strict";
/**
 *  TypeScript Type Aliases and Interfaces:
 TypeScript allows types to be defined separately from the variables that use them.
 Aliases and Interfaces allows types to be easily shared between different variables/objects
 */
const carYear = 2001;
const carType = "Toyota";
const carModel = "Corolla";
const carFeatures = ["Bluetooth", "AndroidCarPlay", "AppleCarPlay"];
const car = {
    year: carYear,
    type: carType,
    model: carModel,
    features: carFeatures
};
const { year, type, model, features } = car;
console.log(year);
console.log(type);
console.log(model);
console.log(features);
const rectangle = {
    height: 20,
    width: 10
};
const { height, width } = rectangle;
console.log(height);
console.log(width);
const coloredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
