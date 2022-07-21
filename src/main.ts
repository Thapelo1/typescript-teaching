/**
 * TypeScript Casting
  There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.
  Casting is the process of overriding a type.
 */


  /**
 * Casting with as
  A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.
 */

  let x: unknown = 'hello';
  console.log((x as string));
  console.log(typeof x); // return string
  




/**
 * Casting with <>
  Using <> works the same as casting with as.
 */

  let y: unknown = 'hello';
  console.log((<string>y).length);
  console.log(typeof y);
  



  /**
 * Force casting  
  To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
 */

  let z:string = 'hello';

  console.log(((x as unknown) as number).length); 


  let myVar: unknown = "Hello world!";
    console.log((<string>myVar).length);
    console.log(typeof myVar);
    

  