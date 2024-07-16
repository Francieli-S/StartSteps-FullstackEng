class Shape {
  protected color: string;

  constructor(color: string) {
    this.color = color;
  }

  draw() {
    console.log(`Drawing shape with the color of: ${this.color}`);
  }
}

class Circle extends Shape {
  private radius: number;

  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * (this.radius ^ 2);
  }
}

class Rectangle extends Shape {
  protected height: number;
  protected width: number;

  constructor(color: string, height: number, width: number) {
    super(color);
    this.height = height;
    this.width = width;
  }

  calculateArea(): number {
    return this.height * this.width;
  }
}

class Square extends Rectangle {
  // has all members of rectangle and shape
  constructor(color: string, height: number, width: number) {
    super(color, height, width);
  }
}

console.log('Simple Shape');
const simpleShape = new Shape('blue')
simpleShape.draw()

console.log('Circle');
const circleShape = new Circle('black', 10)
circleShape.draw() // coming from parent Shape
console.log(circleShape.calculateArea());

console.log('Rectangle');
const rectangleShape = new Rectangle('red', 10, 20)
rectangleShape.draw() // coming from parent Shape
console.log(rectangleShape.calculateArea());

console.log('Square');
const squareShape = new Square('green', 15, 11)
squareShape.draw() // from SHAPE --> RECTANGLE --> SQUARE (MULTILEVE INHERITANCE)
console.log(squareShape.calculateArea()); // from parent rectangle


