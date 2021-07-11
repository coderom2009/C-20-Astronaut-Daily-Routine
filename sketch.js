var bG,bG_Img;
var astronaut;
var brush_Img;
var eat;
var gymt;
var fly;
var sleep_Img
var b
function preload(){
bG_Img = loadImage("iss.png")
b = loadAnimation("bath1.png","bath2.png")
brush_Img = loadImage("brush.png")
eat = loadAnimation("eat1.png","eat1.png","eat2.png","eat2.png","drink1.png","drink1.png","drink2.png","drink2.png")
gymt = loadAnimation("gym1.png","gym2.png","gym1.png","gym2.png","gym11.png","gym12.png","gym11.png","gym12.png")
fly = loadAnimation("move.png","move1.png")
sleep_Img = loadImage("sleep.png")
}
function setup() {
  createCanvas(900,650);
  bG = createSprite(450,350);
  bG.addImage("bG",bG_Img);
  bG.scale = 0.18;
  
  astronaut = createSprite(500,450);
  astronaut.addImage("a",sleep_Img);
  astronaut.scale = 0.15;

  
}

function draw() {
  background(225,225,225);  
  text("Instruction:"+" Up arrow = Brushing,"+" Down arrow = Gymming,"+" Left arrow = Bathing,"+" Right arrow = Eating,"+" m key = moving",2,20)
  if(keyDown(UP_ARROW)){
    astronaut.addImage("a",brush_Img)
  }else if(keyDown(DOWN_ARROW)){
    astronaut.addAnimation("a",gymt);
  }else if(keyDown(LEFT_ARROW)){
    astronaut.addAnimation("a",b)
  }else if(keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("a",eat)
  }//else if(keyDown(M)){
   // astronaut.addAnimation("a",fly)
   // astronaut.velocityX = 0.5
  //  astronaut.velocityY = 1
//  }
  drawSprites();
}


