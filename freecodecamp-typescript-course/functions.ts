function addTwo(num: number): number {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

addTwo(5);
getUpper("ocean");
signUpUser("ocean", "ocean@gmail.com", true);
loginUser("ocean", "ocean@hotmail.com");

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
