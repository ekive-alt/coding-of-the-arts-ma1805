let select = 0;
let rgb = [255, 0, 0];
let i=10

function setup() {
  createCanvas(400,400);
  background(0,0,50);
}

function draw() {
  fill(0,100,0);
  noStroke();
  triangle(160, 115, 190, 60, 226, 115);
  triangle(140, 155, 190, 80, 246, 155);
  triangle(120, 210, 190,100, 266, 210);
  triangle(100, 260, 190,120, 286, 260);
  triangle(80, 325, 190, 140, 306, 325);

if(select==0){
    rgb = [255, 0, 0];
  }else{
    rgb = [0, 0, 255];
  }
  fill(rgb);
  ellipse(mouseX, mouseY, 30);
}

function mouseClicked() {
  if(select==10){
    select=5;
  }else{
    select=0;
  }
  return false;
}


  