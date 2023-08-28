import { User, Users } from "./types";

// Helper functions / Utils (Utilities)
const genId = (): number => Math.floor(Math.random() * 10) + 1;

// CRUD functions - USER
const initUser = (id: number, name: string, age: number | null): User => ({
  id,
  name,
  age,
});
const getUserName = ({ name }: { name: string }): string => name;
const setUserName = (user: User, newName: string): User => ({
  ...user,
  name: newName,
});
const removeUserAge = (user: User): User => ({ ...user, age: null });

const userGabriel: User = initUser(genId(), "Gabriel", 33);
console.log(userGabriel);
console.log(getUserName(userGabriel));
console.log(setUserName(userGabriel, "Michael"));
console.log(removeUserAge(userGabriel));

// CRUD functions - USERS
const initUsers = (...users: Users): Users => users;
const addUser = (users: Users, newUser: User): Users => [...users, newUser];
const setUserNameById = (users: Users, id: number, newName: string): Users =>
  users.map((user) => (user.id !== id ? { ...user, name: newName } : user));
const removeUserById = (users: Users, id: number): Users =>
  users.filter((user) => user.id !== id);

const userZeruel: User = initUser(genId(), "Zeruel", 22);
const userRamiel: User = initUser(genId(), "Ramiel", 11);
const users: Users = initUsers(userGabriel, userZeruel);
console.log(users);
console.log(addUser(users, userGabriel));
console.log(setUserNameById(users, users[0].id, "Thomas"));
console.log(removeUserById(users, users[0].id));
