let micek;
let micek1;
let grid;

class Grid{
  constructor(){
    this.rows = 40;
    this.cols = 40;
    this.gap = 0;
    this.squares = [];
    for(let r = 0; r < this.rows; r++){
      for(let c = 0; c < this.cols; c++){
        this.squares.push(new Square(r*(30 + this.gap), c*(30 + this.gap)));
      }
    }
  }

  draw(){
    this.squares.forEach(function(sq, idx, arr) {
      sq.draw();
    });
  }
}

class Square{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 30;
    this.color = 'rgb(255,255,255)';
    }

  detectPoint(pointX, pointY) {
    return collidePointRect(pointX, pointY, this.x, this.y, this.size, this.size);
  }  

  draw(){
    fill(this.color);
    square(this.x, this.y, this.size);
  }
}


class Ball{
  constructor(){
    this.x=200;
    this.y=200;
    this.size=10;
    this.color= 'rgb(255,2,0)'
    }
  
  move(){
    if (keyIsDown(UP_ARROW)) this.y--;
    if (keyIsDown(DOWN_ARROW)) this.y++;
    if (keyIsDown(LEFT_ARROW)) this.x--;
    if (keyIsDown(RIGHT_ARROW)) this.x++;
  }
  draw(){
    fill(this.color);
    noStroke();
    circle(this.x, this.y, this.size);
  }
}
function setup() {
  createCanvas(1300, 450);
  
  grid = new Grid();
  micek = new Ball();
  micek1 = new Ball();
  
}

function draw() {
 background(255);
 grid.draw();
  //micek1.move();
  //micek1.draw(); 
}



function mouseClicked() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  micek1.color = `rgb(${r}, ${g}, ${b})`;
  grid.squares.forEach(function(sq, idx, arr) {
    if (sq.detectPoint(mouseX, mouseY)) {
      if (mouseButton === LEFT) {
        sq.color = 'red';
      } 
      if ((mouseButton === LEFT) && (keyIsDown(16))) {
        sq.color = 'white';
      } 
    }
  })
}

function keyPressed(){
  if(keyCode === 107){
    micek1.size++;
  }
  if(keyCode === 109){
    micek1.size--;
  }
}