let customColor;
let shapeSize = 80; //size

function setup() {
  createCanvas(640, 480); 
  let r = random(0, 255); 
  let g = random(0, 255); 
  let b = random(0, 255); 

  customColor = [r, g, b];
}

function draw() {
  background(255); 

  // red
  fill(200, 0, 0); 
  ellipse(width/2, height/2, shapeSize *4);

  // random colour
  fill(customColor[0], customColor[1], customColor[2]); 
  ellipse(width / 2, height / 2, shapeSize);
}
