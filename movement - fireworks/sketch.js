function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {

// middle
 x1 = width / 5;
 y1 = height / 5;

// the lines
   x2 = random(width * 2 / 70, width / 2 + 50);
   y2 = random(height * 2 / 70, height / 2 + 50);

  // colour
   r = random(255);
   g = random(255);
   b = random(255);

  stroke(r, g, b);
  line(x1, y1, x2, y2);

}
