var fixedRect,movingRect;
var gameObject;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(100,300,50,80);
  movingRect = createSprite(800,300,80,30);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect.debug = true;
   movingRect.velocityX = -5;
   fixedRect.velocityX = 5;
  gameObject = createSprite(300,100,50,50);
  gameObject.shapeColor = "green";
}

function draw() {
  background(0);  
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;
//  if(isTouching(gameObject,movingRect)){
//   fixedRect.shapeColor = "red";
//   movingRect.shapeColor = "red";
  
//  }
//  else{
//   fixedRect.shapeColor = "green";
//   movingRect.shapeColor = "green";  
//  }
 bounceOff(movingRect,fixedRect);
  drawSprites();
} 
