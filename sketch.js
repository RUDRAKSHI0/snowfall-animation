const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var BackgroundImg;
var man;
var man1Img,man2Img,man3Img;
var snowflakes = [];
function preload(){
BackgroundImg =loadImage( "snow2.jpg")

man2Img = loadAnimation("man2.png","man3.png")
man3Img = loadAnimation("man1.png")
}
function setup() {
createCanvas(1280,620);
engine = Engine.create();
world = engine.world;
 //createSprite(400, 200, 50, 50);
  //Background = createSprite(650,300,1280,720)
 //Background.addImage("ground",BackgroundImg)
 man = createSprite(100,530,10,10)
 man.addAnimation("walking2",man3Img);
 man.addAnimation("walking1",man2Img);
man.scale=0.5
 //Background = new Ground(200,200,50,50)
// Background.addImage(BackgroundImg)
}

function draw() {
  Engine.update(engine);
  background(BackgroundImg);
  if(frameCount%10===0){
   snowflakes.push(new Snowflakes(random(20,1220),10,10));
  }
  
  keyPressed()
  if(man.x>1080){
    man.velocityX=0;
    man.changeAnimation("walking2",man3Img)
  }
  for (var s = 0; s < snowflakes.length; s++) {
    snowflakes[s].display();
   }
  
   
  drawSprites();
  
}
function keyPressed(){
if(keyCode==32){
  man.velocityX=4;
  man.changeAnimation("walking1",man2Img)
}
}


