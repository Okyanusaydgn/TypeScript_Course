function logger<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext
) {
  console.log("logger decorator");
  console.log(target);
  console.log(ctx);

  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log("class constructor");
      console.log(this);
    }
  };
}

function autobind(
  target: (...args: any[]) => any,
  ctx: ClassMemberDecoratorContext
) {
  console.log(target, ctx);
  console.log(ctx);
}

@logger
class Person {
  name = "ocean";
  @autobind
  greet() {
    console.log("hi, i am " + this.name);
  }
}

const max = new Person();
max.greet(); // "hi, i am ocean"
console.log(max); // Person { name: 'ocean', age: 35 }
