"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
    draw() {
        console.log(`Drawing shape with the color of: ${this.color}`);
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * (this.radius ^ 2);
    }
}
class Rectangle extends Shape {
    constructor(color, height, width) {
        super(color);
        this.height = height;
        this.width = width;
    }
    calculateArea() {
        return this.height * this.width;
    }
}
class Square extends Rectangle {
    // has all members of rectangle and shape
    constructor(color, height, width) {
        super(color, height, width);
    }
}
console.log('Simple Shape');
const simpleShape = new Shape('blue');
simpleShape.draw();
console.log('Circle');
const circleShape = new Circle('black', 10);
circleShape.draw(); // coming from parent Shape
console.log(circleShape.calculateArea());
console.log('Rectangle');
const rectangleShape = new Rectangle('red', 10, 20);
rectangleShape.draw(); // coming from parent Shape
console.log(rectangleShape.calculateArea());
console.log('Square');
const squareShape = new Square('green', 15, 11);
squareShape.draw(); // from SHAPE --> RECTANGLE --> SQUARE (MULTILEVE INHERITANCE)
console.log(squareShape.calculateArea()); // from parent rectangle
