"use strict";
/**
 * TypeScript Basic Generics:
 * Generics allow creating 'type variables' which can be used to create classes,
    functions & type aliases that don't need to explicitly define the types that they use.
    Generics makes it easier to write reusable code.
 */
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        return this.name = name;
    }
}
const TP = new Person("Thapelo");
/*
 * Function:
 */
function createPair(params1, params2) {
    return [params1, params2];
}
console.log(createPair('Thapelo', 25));
/*
 * Classes:
    Generics can be used to create generalized classes, like Map.
 */
class NamedValue {
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name}: ${this._value}`;
    }
}
let value = new NamedValue('myNumber');
value.setValue(10);
console.log(value.toString()); // myNumber: 10
const wrappedValue = { value: 10 };
/*
 * Default Value
 */
class NamedValue2 {
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name}: ${this._value}`;
    }
}
let value2 = new NamedValue2('myNumber');
value2.setValue('myValue');
console.log(value2.toString()); // myNumber: myValue
/*
* Extends
*/
function createLoggedPair(v1, v2) {
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);
    return [v1, v2];
}
