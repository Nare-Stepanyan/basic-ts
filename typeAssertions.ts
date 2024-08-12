/*
### Exercise 3: Enums and Type Assertions
Task: Create an enum for different user roles (Admin, User, Guest). Write a function that takes a role and returns a message based on the role. Use type assertions where appropriate.
*/

enum Role {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest",
}

const roleMessage = (role: Role): string => {
  switch (role) {
    case Role.ADMIN:
      return `This is ${role} of of the app!`;
    case Role.USER:
      return `This is ${role}!`;
    case Role.GUEST:
      return `This is ${role}`;
    default:
      return `Unknown user`;
  }
};


console.log(roleMessage(Role.ADMIN))

// with type assertion
console.log(roleMessage('user' as Role))