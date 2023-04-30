class Bird {
  constructor(x, y, w, h, img) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.image = img;
  }
  
  move(x, y) {
    this.x += x;
    this.y += y;
  }
  
  display() {
    image(this.image, this.x, this.y, this.width, this.height);
  }
  
  isTouching(pipe) {
    let birdLeft = this.x;
    let birdRight = this.x + this.width;
    let birdTop = this.y;
    let birdBottom = this.y + this.height;
    
    let pipeLeft = pipe.x;
    let pipeRight = pipe.x + pipe.width;
    let pipeTop = pipe.y;
    let pipeBottom = pipe.y + pipe.height;
    
    if (birdRight >= pipeLeft && birdLeft <= pipeRight && birdBottom >= pipeTop && birdTop <= pipeBottom) {

      return true;
    } else {
      return false;
    }
  }
}


