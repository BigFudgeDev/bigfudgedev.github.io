function setup() {
  createCanvas(1707, 940);
  background(51);
  frameRate(60);
}

function draw() {

}

function mouseDragged(){
  if (mouseButton === LEFT){
    fill(255);
    noStroke();
    circle(mouseX, mouseY, 15);
  }
}

function mousePressed() {
  if (mouseButton === CENTER) {
    background(51);
  }
  return false;
}

