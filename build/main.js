"use strict";
/**
 * TypeScript Classes
 * (JavaScript Classes are templates for JavaScript Objects.)
 * TypeScript adds types and visibility modifiers to JavaScript classes.
 */
/**
 * Creating a simple class
 */
class ClassName {
    constructor() { }
}
class Car {
    /**
     * The constructor method is a special method:
        It has to have the exact name "constructor"
        It is executed automatically when a new object is created
        It is used to initialize object properties
        If you do not define a constructor method, JavaScript will add an empty constructor method.
     */
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}
/**
 * Members: Types
 * The members of a class (properties & methods) are typed using type annotations, similar to variables.
 */
class Person {
    constructor(name) {
        this.name = name;
    }
}
const person = new Person("Thapes");
/**
 * Members: Visibility
 * Class members also be given special modifiers which affect visibility.
 *
 * There are three main visibility modifiers in TypeScript.

    public - (default) allows access to the class member from anywhere
    private - only allows access to the class member from within the class
    protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
 */
class Person2 {
    constructor(name) {
        this.name = name;
    }
    getName() { return this.name; }
}
const person2 = new Person2("Thapes");
console.log(person2);
console.log(person2.getName());
/**
 * Parameter Properties
 * TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.
 */
class Person3 {
    // name is a private member variable
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    changeName(nameChange) {
        return this.name = nameChange;
    }
}
const person3 = new Person3("Jane");
console.log(person3.changeName('Khumo Khumo'));
console.log(person3.getName());
/**
 * Readonly
 * Similar to arrays, the readonly keyword can prevent class members from being changed.
 */
class Person4 {
    // name is a private member variable
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    changeName(nameChange) {
        // return this.name = nameChange;     // name cannot be changed after this initial definition, 
        //which has to be either at it's declaration or in the constructor.
    }
}
const person4 = new Person4("Jane");
console.log(person4.changeName('Khumo Khumo'));
console.log(person4.getName());
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const blueRect = new Rectangle(100, 200);
console.log(blueRect.getArea());
class Reactangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const firstRect = new Rectangle(100, 600);
class Square extends Reactangle {
    constructor(width, height) {
        super(width, height);
    }
}
const firstSquare = new Square(200, 200);
console.log(firstSquare.getArea());
class Reactangle2 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    toString() {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
}
class Square2 extends Reactangle2 {
    constructor(width) {
        super(width, width);
    }
    toString() {
        return `Square[width=${this.width}]`;
    }
}
const newSquare = new Square2(200);
console.log(newSquare.toString());
/**
 * Name
 */
