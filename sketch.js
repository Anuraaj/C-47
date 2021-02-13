var book,laser1,laser2,laser3,laser4,laser5;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,gate;

var clue;
var keyStatus = "left";
var gameLevel = 2;
var gotKeySound;
//var rand;
//random spawing of key

//problem1 -random number not working
var level = "level1"
function preload()
{
  bookIMG = loadImage("Images/book.PNG");
  keyIMG = loadImage("Images/keyIMG.PNG");
  boyIMG = loadAnimation("Images/boy1.PNG","Images/boy2.png","Images/boy3.png","Images/boy4.png");
  boy1IMG = loadAnimation("Images/boy1.PNG");

  gotKeySound = loadSound("die.MP3");
}


function setup()
{
  //createCanvas(windowWidth/4+225.25,windowHeight/2+23)

  agent = createSprite(2,375, 20, 20);
  agent.scale = 0.23;
  agent.setCollider("rectangle",0,0,50,150);
  agent.addAnimation("boyRunning", boyIMG);
  agent.addAnimation("boyStop", boy1IMG);
  //rand = random(1,5);
  clue = createSprite(random(100,200),random(100,200),100,100);
  clue.addImage(keyIMG);
  clue.shapeColor = "yellow";
  clue.scale = 0.2;
  clue.depth = 5000;
 
  book = createSprite(380,20,2,2);
  book.addImage(bookIMG);
  book.scale = 0.3;

  laser1 = createSprite(100, 0, 150, 5);
  laser1.shapeColor = "red";
  laser1.velocityY = 1.2;

  laser2 = createSprite(300, 400, 150, 5);
  laser2.shapeColor = "red";
  laser2.velocityY = -0.7;

  laser3 = createSprite(300, 130, 100, 5);
  laser3.shapeColor = "red";

  laser4 = createSprite(100, 300, 70, 5);
  laser4.shapeColor = "red";

  laser5 = createSprite(200, 200, 70, 5);
  laser5.shapeColor = "red";
  laser5.rotation = 135;
  laser5.setSpeedAndDirection(-2,135);


if(gameLevel ===1)
{
  wall1 = createSprite(50,50,100,12);
  wall5 = createSprite(150,150,100,12);
  wall7 = createSprite(100,250,100,12);
  wall9 = createSprite(50,350,100,12);
  wall11 = createSprite(250,350,100,12);
  wall12 = createSprite(350,300,100,12);
  wall13 = createSprite(300,250,100,12);
  wall14 = createSprite(200,200,100,12);
  wall15 = createSprite(350,200,100,12);


  wall2 = createSprite(50,150,12,100);
  wall3 = createSprite(150,50,12,100);
  wall4 = createSprite(200,100,12,100);
  wall6 = createSprite(250,50,12,100);
  wall8 = createSprite(350,50,12,100);
  wall10 = createSprite(200,300,12,100);

  
}
if(gameLevel ===2)
  {
    background("pink");

  wall1 = createSprite(50,50,100,12);
  wall5 = createSprite(150,150,100,12);
  wall7 = createSprite(150,300,100,12);
  wall9 = createSprite(50,350,100,12);
  wall11 = createSprite(350,350,100,12);
  wall12 = createSprite(300,300,100,12);
  wall13 = createSprite(100,250,100,12);
  wall14 = createSprite(200,200,100,12);
  wall15 = createSprite(350,200,100,12);


  wall2 = createSprite(50,150,12,100);
  wall3 = createSprite(150,50,12,100);
  wall4 = createSprite(200,100,12,100);
  wall6 = createSprite(250,200,12,100);
  wall8 = createSprite(350,50,12,100);
  wall10 = createSprite(200,300,12,100);

  }
  gate = createSprite(375,50,50,10);
  gate.shapeColor = "brown";

}

function draw()
{
  background("#bab6b6");
  console.log(mouseX);
  agent.velocityX = 0;
  agent.velocityY = 0;
  //Boy conrtrols
  if(keyDown(UP_ARROW))
  {
    agent.velocityX = 0;
    agent.velocityY = -2;
  }

  if(keyDown(DOWN_ARROW))
  {
    agent.velocityX = 0;
    agent.velocityY = 2;
  }

  if(keyDown(RIGHT_ARROW))
  {
    agent.velocityX = 2;
    agent.velocityY = 0;
  }

  if(keyDown(LEFT_ARROW))
  {
    agent.velocityX = -2;
    agent.velocityY = 0;
  }

  

  

 
  
  
  /*if(rand<0 && rand>1)
  {
    clue.x = 100;
    clue.y = 300;
  }
  if(rand<1 && rand>2)
  {
    clue.x = 200;
    clue.y = 300;
  }
  if(rand<2 && rand>3)
  {
    clue.x = 200;
    clue.y = 300;
  }
  if(rand<3 && rand>4)
  {
    clue.x = 200;
    clue.y = 200;
  }
  if(rand<4)
  {
    clue.x = 300;
    clue.y = 200;
  }*/

  //console.log(mouseX);
 

  if(agent.velocityX === 0 && agent.velocityY === 0)
  {
    agent.changeAnimation("boyStop", boy1IMG);
  }
  else
  {
    agent.changeAnimation("boyRunning",boyIMG);
  }
 
  if(agent.isTouching(laser1) || agent.isTouching(laser2) || agent.isTouching(laser3) || agent.isTouching(laser4) || agent.isTouching(laser5))
  {
    stroke(0);
    
    fill(0);
    textSize(24);
    text("Agent is Caught",120,190);
    
    laser1.setVelocity(0,0);
    laser1.rotationSpeed = 0;
    
    laser2.setVelocity(0,0);
    laser2.rotationSpeed = 0;
    
    laser3.setVelocity(0,0);
    laser3.rotationSpeed = 0;
    
    laser4.setVelocity(0,0);
    laser4.rotationSpeed = 0;
      
    laser5.setSpeedAndDirection(0,45);
    laser5.rotationSpeed = 0;
    
    agent.setVelocity(0,0);
  }
  if(keyDown("space"))
  {
    laser1.y = 100;
    laser2.y = 300;
    laser5.y  = 200;
    laser5.x = 200;
  }
  
  if(clue.isTouching(book) && gameLevel === 1)
  {
    stroke(0);
    fill(0);
    textSize(24);
    text("Agent Wins",120,180);
   
    laser1.setVelocity(0,0);
    laser1.rotationSpeed = 0;
    
    laser2.setVelocity(0,0);
    laser2.rotationSpeed = 0;
    
    laser3.setVelocity(0,0);
    laser3.rotationSpeed = 0;
    
    laser4.setVelocity(0,0);
    laser4.rotationSpeed = 0;
      
    laser5.setSpeedAndDirection(0,45);
    laser5.rotationSpeed = 0;
   
    gate.velocityX = +1;
    gate.destroy();
    agent.setVelocity(0,0);

  
    gotKeySound.play();

    gameLevel = 2;
  }
  if(gameLevel ===2)
  {
    background("pink");
  }
  
  if(!clue.isTouching(book))
  {
    laser3.rotationSpeed = -3;
    laser4.rotationSpeed = 3;
  }
  //edges commands
  edges = createEdgeSprites();
  laser1.bounceOff(edges[0]);
  laser1.bounceOff(edges[1]);
  laser1.bounceOff(edges[2]);
  laser1.bounceOff(edges[3]);

  laser2.bounceOff(edges[0]);
  laser2.bounceOff(edges[1]);
  laser2.bounceOff(edges[2]);
  laser2.bounceOff(edges[3]);

  laser3.bounceOff(edges[0]);
  laser3.bounceOff(edges[1]);
  laser3.bounceOff(edges[2]);
  laser3.bounceOff(edges[3]);

  laser4.bounceOff(edges[0]);
  laser4.bounceOff(edges[1]);
  laser4.bounceOff(edges[2]);
  laser4.bounceOff(edges[3]);

  laser5.bounceOff(edges[0]);
  laser5.bounceOff(edges[1]);
  laser5.bounceOff(edges[2]);
  laser5.bounceOff(edges[3]);
 
  agent.bounceOff(edges[0]);
  agent.bounceOff(edges[1]);
  agent.bounceOff(edges[2]);
  agent.bounceOff(edges[3]);
 
  agent.collide(wall1);
  agent.collide(wall2);
  agent.collide(wall3);
  agent.collide(wall4);
  agent.collide(wall5);
  agent.collide(wall6);
  agent.collide(wall7);
  agent.collide(wall8);
  agent.collide(wall9);
  agent.collide(wall10);
  agent.collide(wall11);
  agent.collide(wall12);
  agent.collide(wall13);
  agent.collide(wall14);
  agent.collide(wall15);

  drawSprites();

  fill("yellow");
  textSize(12);
  
  if(!clue.isTouching(book))
  {
  text("Door",360,55);
  }
  
  if(agent.isTouching(clue))
  {
    keyStatus = "held";
    //console.log("test held");
  }

  if(keyStatus === "held")
  {
    clue.x = agent.x;
    clue.y = agent.y;
  }
}
/*
Your mission, Agent, should you choose to accept it ; Your objective is to reach the end  where a vault is present and collect a piece of classified information present in the vault.

Collect a key present at each level and bring it to the door. Automatically you shall be given access to the next level. 
 
The success of our mission relies on you. All the best Agent .*/




























/*//initiate Game STATEs
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score = 0;

var gameOver, restart;

localStorage["HighestScore"] = 0;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
  
  gameOverImg = loadImage("gameOver.png");
  
  restartImg = loadImage("restart.png");
  
  jumpSound = loadSound("jump.mp3"); 
  dieSound = loadSound("die.mp3");
  checkPointSound = loadSound("checkPoint.mp3"); 
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.addAnimation("collided",trex_collided);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -(6+3*score/100);
  
  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.5;
  gameOver.visible = false; 
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  restart.scale = 0.5;
  restart.visible = false;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudsGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;
}

function draw() {
  background(180);
    
  
  text("Score: "+ score, 500,50);
  
  if(gameState===PLAY)
  {
    score = score + Math.round(getFrameRate()/60);
  
     ground.velocityX = -(6+3*score/100);
  
  
  if(keyDown("space") && trex.y>=159) {
    trex.velocityY = -10;
    jumpSound.play();
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  spawnClouds();
  spawnObstacles();
    if (score>0 && score%100 === 0)
    { 
      checkPointSound.play(); 
    }
    if(obstaclesGroup.isTouching(trex))
    {
     gameState=END; 
     dieSound.play(); 
    }
  }
  else if(gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
        
    //set velcity of each game object to 0
    ground.velocityX = 0;
    trex.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
    cloudsGroup.setVelocityXEach(0);
    
    //change the trex animation
    trex.changeAnimation("collided",trex_collided);
    
    //set lifetime of the game objects so that they are never destroyed
    obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);
    
    
  }
  
  if(mousePressedOver(restart)) {
    reset();
  }
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(80,120));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
  
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -(6+3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}

function reset(){
  gameState = PLAY;
  ground.velocityX = -(6 + 3*score/100)
  gameOver.visible = false;
  restart.visible = false;
  
  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
  
  trex.changeAnimation("running",trex_running);
  
  if(localStorage["HighestScore"]<score)
  { 
    localStorage["HighestScore"] = score; 
  } 
  console.log(localStorage["HighestScore"]);
  
  score = 0;
  
}*/
