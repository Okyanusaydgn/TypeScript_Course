// 1) Basic string array (type inference)
let hobbies = ["Sports", "Cooking"]; // string[]
// hobbies.push(10); // ❌ number not allowed

// 2) Union-typed array (string | number)
let users: Array<string | number>;
users = [1, "Max"]; // ✅
users = [5, 1]; // ✅
users = ["Max", "Anna"]; // ✅

// 3) Tuple: fixed-length [number, number]
let possibleResults: [number, number];
possibleResults = [1, 1]; // ✅
// possibleResults = [5, 10, 12]; // ❌ length mismatch

// 4) Typed object with nested "role"
let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: { description: string; id: number };
} = {
  name: "Max",
  age: 38,
  hobbies: ["cooking", "sports"],
  role: { description: "admin", id: 5 },
};

let val: {} = "is a value";
// let val: {} = "";
// let val: {} = "12";
// let val: {} = 12;
// let val: {} = []

let data: Record<string, number | string>;

data = {
  entry1: 1,
  entry2: "some string",
};
