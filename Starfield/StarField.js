let radius;
let maxRadius;
let stars = [];
let Warping = false

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i = 0; i < 2500; i++){
    stars[i] = new Star();
  }
}

function draw() {
  translate(width/2, height/2);
  background(0);
  for (let i = 0; i < stars.length; i++){
    stars[i].update();
    stars[i].show();
  }
}

function mousePressed(){
  Warping = true;
}

function mouseReleased(){
  Warping = false;
}