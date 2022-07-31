/**
 * TypeScript Basic Generics:
 * Generics allow creating 'type variables' which can be used to create classes, 
    functions & type aliases that don't need to explicitly define the types that they use.
    Generics makes it easier to write reusable code.
 */

    class Person <T> {

        public constructor(private name:T){}

        getName(): T{
            return this.name
        }

        setName(name: T): T{
            return this.name = name
        }
    }

    const TP = new Person<string>("Thapelo");


    



/*
 * Function:
 */

function createPair<S, T>(params1:S, params2:T): [S, T] {
    return [params1, params2];
}

console.log(createPair<string, number>('Thapelo', 25));



/*
 * Classes:
    Generics can be used to create generalized classes, like Map.
 */

    class NamedValue<T> {
        private _value: T | undefined;
      
        constructor(private name: string) {}
      
        public setValue(value: T) {
          this._value = value;
        }
      
        public getValue(): T | undefined {
          return this._value;
        }
      
        public toString(): string {
          return `${this.name}: ${this._value}`;
        }
      }
      
      let value = new NamedValue<number>('myNumber');
      value.setValue(10);
      console.log(value.toString()); // myNumber: 10

/*
 * Type Aliases
 */

type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 10 };


/*
 * Default Value
 */

class NamedValue2<T = string> {
    private _value: T | undefined;
  
    constructor(private name: string) {}
  
    public setValue(value: T) {
      this._value = value;
    }
  
    public getValue(): T | undefined {
      return this._value;
    }
  
    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
  }
  
  let value2 = new NamedValue2('myNumber');
  value2.setValue('myValue');
  console.log(value2.toString()); // myNumber: myValue


  /*
 * Extends
 */

  function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);
    return [v1, v2];
  }