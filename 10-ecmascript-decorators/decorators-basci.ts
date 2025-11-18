function SimpleLogger<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext
) {
  console.log("[SimpleLogger] decorating:", String(ctx.name));

  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log("[SimpleLogger] instance created:", this);
    }
  };
}

function logCall(
  target: (...args: any[]) => any,
  ctx: ClassMemberDecoratorContext
) {
  return function (this: any, ...args: any[]) {
    // console.log(`[LogCall] ${String(ctx.name)} called with:`, args);

    const result = target.apply(this, args);
    console.log(`[LogCall] ${String(ctx.name)} result:`, result);
    return result;
  };
}

function DefaultValue<T>(defaultValue: T) {
  return function (target: undefined, ctx: ClassFieldDecoratorContext) {
    return function (initialValue: T) {
      console.log(
        `[DefaultValue] field "${String(ctx.name)}" initial:`,
        initialValue
      );

      if (
        initialValue === undefined ||
        initialValue === null ||
        (typeof initialValue === "string" && initialValue.trim() === "")
      ) {
        return defaultValue;
      }

      return initialValue;
    };
  };
}

@SimpleLogger
class User {
  @DefaultValue("Anonymous")
  name: string = "";

  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }

  @logCall
  sayHello(greeting: string) {
    console.log(`${greeting}, I'm ${this.name}`);
    return this.name.length;
  }
}

const u1 = new User();
u1.sayHello("Hi");

const u2 = new User("Ocean");
u2.sayHello("Hello");
