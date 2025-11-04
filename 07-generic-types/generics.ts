/* ===========================
   1) Array (Generic form)
   =========================== */
// Two equivalent ways to type an array of strings:
let names: Array<string> = ["Max", "Anna"];
// let names2: string[] = ["Max", "Anna"];

/* ===========================
   2) Generic Key-Value Store
   =========================== */
// DataStore<T> means: any string key maps to a value of type T
type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | boolean> = {};
store.name = "Max"; // value is string
store.isInstructor = true; // value is boolean

let nameStore: DataStore<string> = {};
nameStore.first = "Ada";
nameStore.last = "Lovelace";
// nameStore.active = true; // ❌ Error: only string values allowed here

/* ===========================
   3) Generic merge to a tuple
   =========================== */
// merge<T, U> takes two values with possibly different types,
// returns them as a tuple [T, U]
function merge<T, U>(a: T, b: U) {
  return [a, b] as const; // "as const" keeps a readonly, precise tuple
}

const ids = merge(1, "Okyanus");
// const ids2 = merge<number, string>(1, "Okyanus"); // explicit types are optional

/* ===========================
   4) Merge two objects (returns A & B)
   =========================== */
// "extends object" = only allow object types (safe for spreading)
// Return type A & B = the result must have ALL fields from A AND ALL fields from B
function mergeObj<A extends object, B extends object>(a: A, b: B): A & B {
  return { ...a, ...b };
}

const merged = mergeObj({ userName: "Okyanus" }, { age: 25 });
console.log(merged);
// merged type: { userName: string; age: number }

// interface
interface User {
  id: number;
  name: string;
}

const u: User = { id: 1, name: "Okyanus" };

// Generic Interface
interface Box<T> {
  value: T;
}

const n: Box<number> = { value: 42 };
const s: Box<string> = { value: "hello" };

// class

class Point {
  constructor(public x: number, public y: number) {}
}

const p = new Point(10, 20);

// generic class

class Store<T> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const textStore = new Store<string>();
textStore.add("hello");
textStore.add("world");

const userStore = new Store<User>();
userStore.add({ id: 1, name: "Okyanus" });
