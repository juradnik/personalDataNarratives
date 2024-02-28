
let fly = [] // array of Jitter objects

function preload(){
  fly = loadImage("fly.png")
}

function setup() {
  createCanvas(710, 400);
  // Create objects
  for (let i = 0; i < 50; i++) {
    fly.push(new Jitter());
  }
}

function draw() {
  background(50, 89, 100);
  for (let i = 0; i < fly.length; i++) {
    fly[i].move();
    fly[i].display();
  }
}

// Jitter class
class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    fly(this.x, this.y, this.diameter, this.diameter);
  }
}