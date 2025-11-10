interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string;
  startTrail(): string;
  getCoupon(Couponname: string): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const hitesh: Admin = {
  dbId: 22,
  email: "h@h.com",
  userId: 2211,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "okyanus") => {
    return 10;
  },
  githubToken: "github",
  role: "admin",
  // getCoupon(name: string) {
  //   return 10;
  // },
};

hitesh.email = "oc.email.com";

export {}