// ~/types/index.ts

export {};

declare global {
  interface User {
    firstName: string;
    lastName: string;
    isAdmin: boolean;
    email: string;
  }
}
