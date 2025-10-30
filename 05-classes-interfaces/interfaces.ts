interface Authenticable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

interface AuthenticableAdmin extends Authenticable {
  role: "admin" | "superadmin";
}

class AuthenticableUser implements Authenticable {
  constructor(
    public userName: string,
    public email: string,
    public password: string
  ) {}

  login() {
    //. ....
  }

  logout() {
    //. ....
  }
}

let user: Authenticable;

user = {
  email: "text@example.com",
  password: "abc1",
  login() {
    // reach out to a database, check credentials, create a session
  },
  logout() {
    // clear the session
  },
};
