function setup() {
  createCanvas(800,500);
  createSprite(600, 100, 600, 90);
  createSprite(600, 220, 600, 90);
  createSprite(600, 340, 600, 90);
  createSprite(600, 450, 600, 90);
  createSprite(750,100,20,100);
 }

function draw() {
  background(255,255,255);  
  drawSprites();
}