// Module flag: avoid global scope conflicts
export {};

/* --- Optional: enum example (commented) ---
enum Role { Admin, Editor, Guest }
let userRoleEnum: Role = Role.Admin;
------------------------------------------- */

// Role type: only these four string values
type Role = "admin" | "editor" | "guest" | "reader";

// User type: example object shape
type User = {
  name: string;
  age: number;
  role: Role; // must be one of the Role values
  permissions: string[]; // array of strings
};

// Start value
let userRole: Role = "editor";

// Later change (valid)
userRole = "admin";

// Tuple: exactly 2 items; each must be 1 or -1
let possibleResults: [1 | -1, 1 | -1];
possibleResults = [1, 1]; // ok

// Function: accepts only a Role
function access(role: Role) {
  // check permissions here
}
