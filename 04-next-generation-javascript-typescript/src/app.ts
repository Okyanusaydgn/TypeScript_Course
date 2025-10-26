// ============== 1) Basic variables ==============
const userName = "Okyanus";
// userName = "Max"; // ❌ can't change a const

let age = 30;
age = 29; // ✅ let can change

// ============== 2) Functions =====================
// Add many numbers and return the sum
const add = (...numbers: number[]): number =>
  numbers.reduce((sum, n) => sum + n, 0);

// Print a string or a number
const printOutput = (output: string | number): void => console.log(output);

// Same idea with another typing style
const printOutput2: (a: number | string) => void = (output) =>
  console.log(output);

// ============== 3) DOM: Event listener ===========
const button = document.querySelector("button");

// If the button exists, log the click event
button?.addEventListener("click", (event: MouseEvent) => {
  console.log(event);
});

// ============== 4) Arrays & spread ===============
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

// Add all items from hobbies into activeHobbies
activeHobbies.push(...hobbies);

// ============== 5) Objects (copy) ================
// Original object
const person = { name: "Okyanus", age: 25 };

// Shallow copy (new top-level object)
const copiedPerson2 = { ...person };

// ============== 6) Run examples ==================
const addedNumbers = add(5, 10, 2, 3.7);
printOutput(addedNumbers);

// Extra logs (optional)
// console.log("activeHobbies:", activeHobbies);
// console.log("person:", person);
// console.log("copiedPerson2:", copiedPerson2);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);
