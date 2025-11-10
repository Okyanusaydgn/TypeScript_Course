const appUser = {
  name: "Okyanus",
  age: 25,
  permissions: [{ id: "p1", title: "admin", description: "Admin access" }],
};

// type AppUser = typeof appUser;

type AppUser = {
  name: string;
  age: number;
  permissions: {
    id: string;
    title: string;
    description: string;
  }[];
};

type Perms = AppUser["permissions"];
type Perm = Perms[number];

type Names = string[];
type Name = Names[number];
