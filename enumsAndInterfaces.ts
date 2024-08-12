/* ### Exercise 2: Enums and Interfaces */

// Task: Create an enum Color with values Red, Green, and Blue. Write a function that takes a Color and returns a string describing the color.
enum Color {
  RED = "red",
  GREEN = "green",
  BLUE = "blue",
}

const getColor = (color: Color): string => {
  switch (color) {
    case Color.BLUE:
      return `The color is ${Color.BLUE}`;

    case Color.GREEN:
      return `The color is ${Color.GREEN}`;

    case Color.RED:
      return `The color is ${Color.RED}`;

    default:
      return `The color is not predefined.`;
  }
};

console.log(getColor(Color.BLUE));

// Task: Define an interface Car with properties make, model, and year. Then create a class that implements this interface and includes a method to display the car's details.

interface ICar {
  make: string;
  model: string;
  year: number;
}

class Car {
  make: string;
  model: string;
  year: number;
  
  constructor(car: ICar) {
    (this.make = car.make), (this.model = car.model), (this.year = car.year);
  }

  getCarDetails = () => {
    return `This is ${this.model} made in ${this.make} in ${this.year}`;
  };
}

const sampleCar = new Car({ make: "Germany", model: "BMW", year: 2020 });

console.log(sampleCar.getCarDetails());
