// class User {
//   name: string;
//   age: number;

//   constructor(n: string, a: number) {
//     // this.name = 'Max';
//     this.name = n;
//     this.age = a;
//   }
// }

// new User();

// class User {
//   public name: string;
//   private age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

class User {
  readonly hobbies: string[] = [];

  constructor(public name: string, private readonly age: number) {}

  greet() {
    console.log("My age: " + this.age);
  }
}

const max = new User("Max", 36);
const fred = new User("Fred", 29);

max.hobbies.push("Sports");

console.log(max, fred);
