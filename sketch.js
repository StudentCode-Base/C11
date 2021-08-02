var bombImg, bombImg_sprite, coinImg, coinImg_sprite, energyDrinkImg, energyDrinkImg_sprite;
var pathImg, pathImg_sprite, powerImg, powerImg_sprite, Runner_1Img, Runner_1Img_sprite, Runner_2Img;
var RunnerImg, Runner_2Img_sprite;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  RunnerImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;
  Runner = createSprite(180,340);
  Runner.addAnimation("RunnerImg",RunnerImg);
  Runner.scale = 0.1
  LeftInvisibleBoundaries = createSprite(0, 0, 100, 800);
  LeftInvisibleBoundaries.visible = false;
  RightInvisibleBoundaries = createSprite(400, 0, 100, 800);
  RightInvisibleBoundaries.visible = false;
}



//Runner.x = World.mouseX;
//Runner.y = World.mouseY;

function draw() {
  background("white");
  Runner.x = World.mouseX;
  Runner.y = World.mouseY;
  if(path.y > 400 ){
    path.y = height/2;
  }
  Runner.collide(LeftInvisibleBoundaries);
  Runner.collide(RightInvisibleBoundaries);
  drawSprites();
}
