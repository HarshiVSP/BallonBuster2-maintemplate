
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var red, green, blue, pink

var score =0;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(360,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0  
 redB= new Group();
 pinkB= new Group();
 greenB= new Group();
 blueB= new Group();
arrowGroup= new Group();

  
}

function draw() {
 background(0);
 

 
 if(gameState === PLAY)
 {
      bow.y = World.mouseY 
      scene.velocityX = -3 
      if (scene.x < 0){
          scene.x = scene.width/2;
         }
      
      
      
      
           
     
      

  
   
  if (keyWentDown("space")) {
    createArrow();  
  }
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 40 == 0) {
    switch(select_balloon ){
      case 1: redBalloon();
      break;
      case 2:blueBalloon();
      break;
      case 3:pinkBalloon();
      break;
      case 4:greenBalloon();
      break;
      default:break;
    }
  }
 }


  if (gameState === END) {
    
       scene.velocityX = 0;

  }

if (frameCount>700) {
  gameState=END; 
}




 

  drawSprites();
  text("Score: "+ score, 300,50);

}












function redBalloon() {
if(frameCount%50===0){
  var red = createSprite(20, 370, 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.y=Math.round(random(50,300));
  red.lifetime = 150;
  red.scale = 0.1;
 redB.add(red);
}
  
}

function blueBalloon() {
if(frameCount%100===0){
  var blue = createSprite(20, 370, 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.y=Math.round(random(150,300));
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}
 
}

function greenBalloon() {
if(frameCount%120===0){
  var green = createSprite(20, 370, 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.y=Math.round(random(60,150));
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
}
  
}

function pinkBalloon() {
if(frameCount%120===0){
  var pink = createSprite(20, 370, 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.y=Math.round(random(100,200));
  pink.lifetime = 150;
  pink.scale = 1;
  pinkB.add(pink);

}
 
}

// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);

}
