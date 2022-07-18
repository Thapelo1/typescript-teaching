"use strict";
/*
TypeScript Tuples:

A tuple is a typed array with a pre-defined length and types for each index.
Tuples are great because they allow each element in the array to be a known type of value.
To define a tuple, specify the type of each element in the array:
 */
// Define your Tuple
let ourTuple;
//Initalize correctly
ourTuple = [true, 'name', 20];
console.log(ourTuple);
// define our tuple
let ourTuple2;
// initialize incorrectly throws an error; Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.
ourTuple2 = [false, 'Coding God was mistaken', 5];
/*
Readonly Tuple
 */
let ourTuple3;
ourTuple3 = [1, 'firstName', 'secondName', 28];
ourTuple3.push(1);
console.log(ourTuple3);
/*
If you have ever used React before you have worked with tuples more than likely.
 */
/*
Named Tuples:
Named tuples allow us to provide context for our values at each index.
 */
let namedTuple = [1, 'Khumo'];
/*
Destructuring Tuples    :
Since tuples are arrays we can also destructor them.
 */
const graph = [55.2, 41.3];
const [x, y] = graph;
console.log(`
${x},
${y}
`);
