// const user : (string | number)[] = [1, 'hc'];

let tUser: [string, number, boolean];

tUser = ["hc", 131, true];

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];

const newUser: User = [112, "example@gmail.com"];

newUser[1] = "oa.com";
newUser.push("true");

export {};
