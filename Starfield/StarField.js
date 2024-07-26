let radius;
let maxRadius;
let stars = [];

function setup() {
  createCanvas(1707, 940);
  
  for (let i = 0; i < 2500; i++){
    stars[i] = new Star();
  }
}

function draw() {
  translate(windowWidth/2, windowHeight/2);
  background(0);
  for (let i = 0; i < stars.length; i++){
    stars[i].update();
    stars[i].show();
  }
}
