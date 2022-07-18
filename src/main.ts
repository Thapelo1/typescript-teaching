/**
 * TypeScript Object Types
 */

const vehicle: {type: string, model: string, year: number} = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
}


// Type Inference
const vehicle2 = {
    type: "VW",
    model: 'Golf',
    year: 2009
}

/**
 * Optional Properties
 */

 const vehicle3: {type: string, model?: string, year?: number} = {
    type: "Toyota",
}

/**
 * Index Signatures
 * Index signatures can be used for objects without a defined list of properties.
 */

 const nameAgeMap: { [index: string]: number } = {};
 nameAgeMap.Jack = 25; // no error
 nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.x