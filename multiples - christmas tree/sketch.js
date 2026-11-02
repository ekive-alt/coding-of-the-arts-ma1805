
let select = 0;
let rgb = [255, 0, 0];
let decorations = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 50);

  //  tree
  fill(0, 100, 0);
  noStroke();
  triangle(160, 115, 190, 60, 226, 115);
  triangle(140, 155, 190, 80, 246, 155);
  triangle(120, 210, 190, 100, 266, 210);
  triangle(100, 260, 190, 120, 286, 260);
  triangle(80, 325, 190, 140, 306, 325);

  // bauble
  if (select == 0) {
    rgb = [255, 0, 0];
  } else {
    rgb = [0, 0, 255];
  }

  
  for (let i = 0; i < decorations.length; i++) {
    fill(decorations[i].colour);
    ellipse(decorations[i].x, decorations[i].y, 30, 30);
  }


  fill(rgb);
  ellipse(mouseX, mouseY, 30, 30);
}

function mouseClicked() {
  decorations.push({
    x: mouseX,
    y: mouseY,
    colour: [...rgb]
  });

  if (select == 0) {
    select = 1;
  } else {
    select = 0;
  }
}




  