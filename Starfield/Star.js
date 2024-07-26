class Star {
    constructor(){
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.z = random(width);
      this.pz = this.z;
      this.maxWarpSpeed = 35;
      this.minWarpSpeed = 10;
      this.strokeWeight = 1;
      this.red = 255;
      this.green = 255;
      this.blue = 255;
    }
    
  
    update(){

      if (!Warping){
        if (this.maxWarpSpeed > 35){
          this.maxWarpSpeed -=15;
        }
        if (this.minWarpSpeed > 10){
          this.minWarpSpeed -= 5;
        }
        this.speed = map(this.z, 0, width, this.maxWarpSpeed, this.minWarpSpeed);

        if (this.red < 255){
          this.red += 10;
        }

        if (this.green < 255){
          this.green += 5;
        }

        if (this.blue < 255){
          this.blue +=3;
        }

      }

      else{
        if (this.maxWarpSpeed < 350){
          this.maxWarpSpeed += 3;
        }
        if (this.minWarpSpeed < 100){
          this.minWarpSpeed += 1;
        }
        this.speed = map(this.z, 0, width, this.maxWarpSpeed, this.minWarpSpeed);

        if (this.strokeWeight < 3) {
          this.strokeWeight += 0.05;
        }

        if (this.red > 135){
          this.red -= 10;
        }

        if (this.green > 206){
          this.green -= 5;
        }

        if (this.blue > 250){
          this.blue -=3;
        }

      }

        this.z -= this.speed;
        if (this.z <= 0) {
          this.z = width;
          this.x = random(-width, width);
          this.y = random(-height, height);
          this.pz = this.z;
        }
  
    }
  
    show(){
        fill(this.red, this.green, this.blue);
        noStroke();

        this.sx = map(this.x / this.z, 0, 1, 0, width);
        this.sy = map(this.y / this.z, 0, 1, 0, height);

        this.px = map(this.x / this.pz, 0, 1, 0, width);
        this.py = map(this.y / this.pz, 0, 1, 0, height);

        this.radius = map(this.z, 0, width, 16, 0);
        if (!Warping){
          ellipse(this.sx, this.sy, this.radius, this.radius);
        }
        else{
          strokeWeight(4);
          stroke(this.red, this.green, this.blue);
          line(this.px, this.py,  this.sx, this.sy);
        }

        this.pz = this.z;
    }
  }