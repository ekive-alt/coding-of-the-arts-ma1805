let img;
let cute;
let back;
let cursorImg;
let vid;

function preload() {
  img = loadImage('mileena.jpg');
  cute = loadImage('cute.jpg');
  back = loadImage('backdrop.jpg');
  cursorImg = loadImage('sai.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor(); // hides default mouse

vid = createVideo('empress.mp4');
vid.hide();
vid.volume(1);

}

function draw() {
  // background
  image(back, 0, 0, width, height);

  // pictures
  image(img, 0, 0, 300, 500);
  image(cute, 1200, 0, 300, 500);

  // filters
  filter(POSTERIZE, 3);
  filter(GRAY);

// my edit 
image(vid, width / 2 - 300, height / 2 - 300, 600, 600);


  // custom mouse cursor 
  if (mouseIsPressed) {
    image(cursorImg, mouseX, mouseY, 100, 100);
  } else {
    image(cursorImg, mouseX, mouseY, 50, 50);
  }
}

function mousePressed() {
  vid.volume(1);
  vid.elt.muted = false;
  vid.play();
}

   




