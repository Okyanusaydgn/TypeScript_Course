let score: number | string = 33;

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let hitesh: User | Admin = { name: "ocean", id: 2312 };

hitesh = { username: "ocean", id: 232 };

// function getDbId(id: number | string) {
//   console.log(`DB id is: ${id}`);
// }

getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

// array

const data: number[] = [1, 2, 3, 4];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number | boolean)[] = [1, 2, 3, "4", true];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
seatAllotment = "middle";

export {};
