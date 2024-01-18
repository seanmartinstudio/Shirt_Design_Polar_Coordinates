let sketchHeight, sketchWidth;
let numShapesX = 5;
let numShapesY = 5;
let shapeDistanceX = 150;
let shapeDistanceY = 150;
const shapeSizeFraction = 0.1;
let off = 1;
let currentShapeX = 0;
let currentShapeY = 0;
let loopCounter = 0;

function setup() {
  createCanvas(800, 800);
    background(0);
}

function draw() {
  loopCounter++;
  if (loopCounter >= 75) {
    noLoop(); // Stop the draw loop
    // save("tshirt_test.jpg")
  }

  let r = random(0, 255)
  let g = random(0, 255)
  let b = random(0, 255)
  fill(color(r, g, b))
  noStroke()
  // frameRate(20);


  const startX = (width - (numShapesX - 1) * shapeDistanceX) / 2;
  const startY = (height - (numShapesY - 1) * shapeDistanceY) / 2;

  const xPosition = startX + currentShapeX * shapeDistanceX;
  const yPosition = startY + currentShapeY * shapeDistanceY;

  const shapeSize = min(width, height) * shapeSizeFraction;

  beginShape();
  for (let angle = 0; angle < 360; angle += 150) {
    off += 1;
    const radius = map(noise(off), 0, 1, 0, shapeSize);
    const x = radius * cos((PI / 180) * angle) + xPosition;
    const y = radius * sin((PI / 180) * angle) + yPosition;
    vertex(x, y);
  }
  endShape(CLOSE);

  // Move to the next shape
  currentShapeX++;
  if (currentShapeX >= numShapesX) {
    currentShapeX = 0;
    currentShapeY++;
    if (currentShapeY >= numShapesY) {
      currentShapeY = 0;
    }
  }
}
