export type User = {
  id: number;
  name: string;
  age: number | null;
  hobbies?: string[];
};

export type Users = User[];
