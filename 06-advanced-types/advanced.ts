type DataStore = {
  [prop: string]: number | boolean;
};

// let someObj: Record<string, number | boolean>;

let store: DataStore = {};

// ...

store.id = 5;
store.isOpen = false;
// store.name = 'Max';

let roles = ["admin", "guest", "editor"] as const;
// roles.push('okyanus');
const firstRole = roles[0];

///////////////////

// const dataEntries: Record<string, number>;
