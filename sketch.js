let radius = 10;

function setup() {
  createCanvas(1707, 940);
  background(51);
}

function mousePressed() {
    radius = 5;
}

function draw() {
  background(51)
  fill(255);
  noStroke();
  radius = radius + 5;
  circle(windowWidth / 2, windowHeight / 2, radius);
  
}


