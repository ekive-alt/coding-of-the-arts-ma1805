
function setup() {
  createCanvas(400, 400);

}
function draw() {
  background(0);

  // body
  fill(255, 20, 147);
  noStroke();
  ellipse(200, 180, 100, 100);
  rect(150, 185, 100, 80);

  // butt
  triangle(150, 230, 180, 260, 150, 280);
  triangle(150, 230, 210, 260, 180, 280);
  triangle(150, 230, 250, 260, 250, 280);

  // eyes
 fill(20);
  noStroke();
  ellipse(180, 175, 28, 35);
  ellipse(220, 175, 28, 35);

  // sparkles
  fill(255);
  ellipse(176, 169, 6, 7);
  ellipse(216, 169, 6, 7);

  fill(255);
  ellipse(176, 169, 8, 9);
  ellipse(216, 169, 8, 9);

   // mouth
  fill(0)
  ellipse(200, 210, 10, 12);

}


