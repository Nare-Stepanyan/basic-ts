/* 
### Exercise 4: Asynchronous Functions and Promises
Task: Write an asynchronous function that fetches data from a mock API and returns the data. Use Promise and async/await.
*/

import { error } from "console";

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

const getUsers = async (): Promise<IUser[]> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`Network error,  Status: ${response.status}`);
    }
    const data: IUser[] = await response.json();
    return data;
  } catch (error) {
     if(error instanceof Error) {
        throw new Error(`Failed to fetch user list: ${error.message }`);
     }
     return []
  }
};

getUsers()
  .then((data: IUser[]) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });
