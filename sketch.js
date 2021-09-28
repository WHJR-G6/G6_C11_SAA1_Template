
var player,player2;
var platform,platform2;
var player_image, platform_image,stone_image;

function preload(){
  player_image=loadImage("images/jack2.png")
  platform_image = loadImage("images/p1.png");
  player2_image=loadImage("images/jack2.png")
  platform2_image = loadImage("images/p2.png");
  stone_image = loadImage("images/stone.PNG");
}


function setup() {
  createCanvas(500, 500);
  player = createSprite(250,300,20,50);
  player.addImage("player",player_image)

  platform = createSprite(250,350,100,10);
  platform.addImage("platform", platform_image)
  platform.scale=0.15
  
}

function draw() {
  background('#F2F5B6');
  
  if(keyDown("up"))
  {
    player.velocityY=-10
  }

  player.velocityY = player.velocityY +0.8;
  player.collide(platform)

  spawnPlatform();
  spawnStone();
  drawSprites();
}

function spawnPlatform(){

  if(frameCount % 60 ===0){
  
    var platforms = createSprite(250,0,50,50);
  platforms.velocityY = 4;

  platforms.addImage(platform_image);

  platforms.scale = 0.15;

  platforms.x = random(0,500);
  }
}

function spawnStone(){

  if(frameCount % 60 ===0){
  
    var stones = createSprite(250,0,50,50);
  stones.velocityY = 4;

  stones.addImage(stone_image);

  stones.scale = 0.4;

  stones.x = random(0,500);
  }
}










