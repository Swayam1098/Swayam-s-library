var fixedRect, movingRect;
var obj1,obj2,obj3,obj4

function setup() {
  createCanvas(800,800);
  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "green";
  fixedRect=createSprite(200,200,50,50);

  obj1 = createSprite(100,100,50,50);
  obj2 = createSprite(100,200,50,50);
  obj3 = createSprite(100,300,50,50);
  obj3.shapeColor = "blue"
  obj4 = createSprite(400,300,50,50);
  obj4.shapeColor = "red"

  fixedRect.shapeColor="green";

  obj3.velocityX = 3
  obj4.velocityX= -3
}

function draw() {
  background(255,255,255);  
  
  movingRect.x = mouseX;
  movingRect.y=mouseY;

  

  //bounceOff(obj3,obj4)

 

 if(isTouching(movingRect,obj1)){
   movingRect.shapeColor = "red";
   obj1.shapeColor = "red";
 }
 else{
    movingRect.shapeColor = "green";
  obj1.shapeColor = "green ";
 }

  //isTouching(movingRect,fixedRect);
  //isTouching(movingRect,obj2)
  
  
  drawSprites();
}

