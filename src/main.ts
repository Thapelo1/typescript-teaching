/**
 TypeScript Arrays
 */

 const items:string[] = ['item01', 'item02', 'item03', 'item04']
 items.push('item05');
 console.log(items);
 
 /**
 TypeScript Arrays:
 Readonly
 */

 const itemsStore: readonly string[] = ['item01', 'item02', 'item03', 'item04']
 itemsStore.push('item05'); // Error: Property 'push' does not exist on type 'readonly string[]'.   
 console.log(itemsStore);

  /**
 TypeScript Arrays:
 Type Inference

 TypeScript can infer the type of an array if it has values.

 */

 const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0]; // no error