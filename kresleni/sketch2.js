let micek;
let micek1;


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
  createCanvas(800, 550);
  micek = new Ball();
  micek1 = new Ball();
  
}

function draw() {
 // background(255);
  micek1.move();
  micek1.draw();
 
}



function mouseClicked() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  micek1.color = `rgb(${r}, ${g}, ${b})`;
}

function keyPressed(){
  if(keyCode === 107){
    micek1.size++;
  }
  if(keyCode === 109){
    micek1.size--;
  }
}