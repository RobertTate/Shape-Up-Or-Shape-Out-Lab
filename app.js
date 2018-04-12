let MAX = 500;

let rectangleButton = document.getElementsByTagName('button')[0];
let squareButton = document.getElementsByTagName('button')[1];
let circleButton = document.getElementsByTagName('button')[2];
let triangleButton = document.getElementsByTagName('button')[3];

let shapeName = document.getElementsByTagName('span')[0];
let shapeWidth = document.getElementsByTagName('span')[1];
let shapeHeight = document.getElementsByTagName('span')[2];
let shapeRadius = document.getElementsByTagName('span')[3];
let shapeArea = document.getElementsByTagName('span')[4];
let shapePerimeter = document.getElementsByTagName('span')[5];



let canvas = document.getElementById('theCanvas');

function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



class Shape {
    constructor(x, y) {
        this.div = document.createElement('div')
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
        canvas.appendChild(this.div);
        this.div.addEventListener('dblclick', () => {
            this.div.remove();
        });

    }
    describe() {

    }
}

// Class and Event Listener For Circle ----------------------------------------

class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
        this.div.classList.add('circle');
        this.div.style.width = `${(this.radius / 2)}px`;
        this.div.style.height = `${(this.radius / 2)}px`;
        this.div.addEventListener('click', () => {
            this.describe();
        });
    }
    describe() {
        shapeName.innerText = 'Circle';
        shapeWidth.innerText = `${this.radius} pixels`;
        shapeHeight.innerText = `${this.radius} pixels`;
        shapeRadius.innerText = `${this.radius / 2} pixels`;
        shapeArea.innerText = `${Math.floor(Math.PI * this.radius * this.radius)} pixels`;
        shapePerimeter.innerText = `${Math.floor(2 * Math.PI * this.radius)} pixels`;
    }
}



function insertCircle() {
    let xVal = randomVal(0, 500);
    let yVal = randomVal(0, 500);
    let radiusField = document.getElementsByTagName('input')[3].value;
    let newCircle = new Circle(xVal, yVal, radiusField);
}

circleButton.addEventListener('click', insertCircle);


// Class and Event Listener For Triangle ----------------------------------------

class Triangle extends Shape {
    constructor(x, y, height) {
        super(x, y);
        this.height = height;
        this.div.classList.add('triangle');
        this.div.style.borderTop = `${this.height}px solid yellow`;
        this.div.style.borderRight = `${this.height}px solid transparent`;
        this.div.addEventListener('click', () => {
            this.describe();
        });
    }
    describe() {
        shapeName.innerText = 'Triangle';
        shapeWidth.innerText = `${this.height} pixels`;
        shapeHeight.innerText = `${this.height} pixels`;
        shapeRadius.innerText = `N/A`;
        shapeArea.innerText = `${this.height * this.height * 0.5} pixels`;
        shapePerimeter.innerText = `${Math.floor(2 * this.height + Math.sqrt(2) * this.height)} pixels`;

    }
}

function insertTriangle() {
    let xVal = randomVal(0, 500);
    let yVal = randomVal(0, 500);
    let heightField = document.getElementsByTagName('input')[4].value;
    let newTriangle = new Triangle(xVal, yVal, heightField);
}

triangleButton.addEventListener('click', insertTriangle);


// Class and Event Listener For Rectangle ----------------------------------------
class Rectangle extends Shape {
    constructor(x, y, width, height) {
        super(x, y);
        this.width = width;
        this.height = height;
        this.div.classList.add('rectangle');
        this.div.style.width = `${this.width}px`;
        this.div.style.height = `${this.height}px`;
        this.div.addEventListener('click', () => {
            this.describe();
        });
    }
    describe() {
        shapeName.innerText = 'Rectangle';
        shapeWidth.innerText = `${this.width} pixels`;
        shapeHeight.innerText = `${this.height} pixels`;
        shapeRadius.innerText = `N/A`;
        shapeArea.innerText = `${this.height * this.height} pixels`;
        shapePerimeter.innerText = `${this.height * 4} pixels`;
    }

}

function insertRectangle() {
    let xVal = randomVal(0, 500);
    let yVal = randomVal(0, 500);
    let widthField = document.getElementsByTagName('input')[0].value;
    let heightField = document.getElementsByTagName('input')[1].value;
    let newRectangle = new Rectangle(xVal, yVal, widthField, heightField);
}

rectangleButton.addEventListener('click', insertRectangle);


// Class and Event Listener for Square ------------------------------------------------
class Square extends Shape {
    constructor(x, y, sideLength) {
        super(x, y);
        this.sideLength = sideLength;
        this.div.classList.add('square');
        this.div.style.width = `${this.sideLength}px`;
        this.div.style.height = `${this.sideLength}px`;
        this.div.addEventListener('click', () => {
            this.describe();
        });
    }
    describe() {
        shapeName.innerText = 'Square';
        shapeWidth.innerText = `${this.sideLength} pixels`;
        shapeHeight.innerText = `${this.sideLength} pixels`;
        shapeRadius.innerText = `N/A`;
        shapeArea.innerText = `${this.sideLength * this.sideLength} pixels`;
        shapePerimeter.innerText = `${this.sideLength * 4} pixels`;
    }
}

function insertSquare() {
    let xVal = randomVal(0, 500);
    let yVal = randomVal(0, 500);
    let sideLengthField = document.getElementsByTagName('input')[2].value;
    let newSquare = new Square(xVal, yVal, sideLengthField);
}

squareButton.addEventListener('click', insertSquare);