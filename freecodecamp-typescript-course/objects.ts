// const User = {
//   name: "ocean",
//   email: "ocean@gmail.com",
//   isActive: true,
// };

// function createUser(user: { name: string; isPaid: boolean }) {}

// createUser({ name: "ocean", isPaid: false });

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return { ...user };
// }

// createUser({ name: "", email: "", isActive: true });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credCardDetails?: number;
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber & cardDate & { cvv: number };

let myUser: User = {
  _id: "12345",
  name: "o",
  email: "ocean@gmail.com",
  isActive: false,
};

export {};
