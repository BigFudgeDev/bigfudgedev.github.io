class Star {
    constructor(){
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.z = random(width);
    }
    
  
    update(){
        this.speed = map(this.z, 0, width, 35, 10);
        this.alpha = map(this.z, 0, width, 255, 150);
        this.z -= this.speed;
        if (this.z <= 0) {
          this.z = width;
          this.x = random(-width, width);
          this.y = random(-height, height);
        }
  
    }
  
    show(){
        fill(255, this.alpha);
        noStroke();
  
        this.sx = map(this.x / this.z, 0, 1, 0, width);
        this.sy = map(this.y / this.z, 0, 1, 0, height);
        this.radius = map(this.z, 0, width, 16, 0);
        ellipse(this.sx, this.sy, this.radius, this.radius);
    }
  }