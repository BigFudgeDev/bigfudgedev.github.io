let radius;
let maxRadius;
let stars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
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

function Star(){
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);

  this.update = function(){
      this.speed = map(this.z, 0, width, 35, 10);
      this.alpha = map(this.z, 0, width, 255, 150);
      this.z -= this.speed;
      if (this.z <= 0) {
        this.z = width;
        this.x = random(-width, width);
        this.y = random(-height, height);
      }

  }

  this.show = function(){
      fill(255, this.alpha);
      noStroke();

      this.sx = map(this.x / this.z, 0, 1, 0, width);
      this.sy = map(this.y / this.z, 0, 1, 0, height);
      this.radius = map(this.z, 0, width, 16, 0);
      ellipse(this.sx, this.sy, this.radius, this.radius);
  }
}
