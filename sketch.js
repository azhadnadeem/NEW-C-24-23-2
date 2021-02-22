
var dustbin,dustbin2,dustbin3;
var ground1,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper1,paperObject;

function preload()
{
	
}

function setup() {
  createCanvas(1000, 400);
  rectMode(CENTER);
  engine = Engine.create();
	world = engine.world;
groundSprite=createSprite(width/2,380,width,40)
groundSprite.shapeColor=color("yellow")
ground=Bodies.rectangle(width/2,380,width,40,{isStatic:true});
World.add(world,ground);
	
dustbin1=createSprite(795,365,155,15)
dustbin2=createSprite(870,345,10,50)
dustbin3=createSprite(720,345,10,50)
dustbin1.shapeColor=color("red")
dustbin2.shapeColor=color("red")
dustbin3.shapeColor=color("red")


paper=new paper(100,100,10,10)

  
  dustbin1=Bodies.rectangle(width/2,365,width,15,{isStatic:true});
  World.add(world,dustbin1);
  dustbin2=Bodies.rectangle(870,345,10,50,{isStatic:true});
  World.add(world,dustbin2);
  dustbin3=Bodies.rectangle(720,345,10,50,{isStatic:true});
  World.add(world,dustbin3);

	
 

  

  
}


function draw() {

 
  background(0);
  Engine.update(engine)
  
  paper.display();
  drawSprites();
  
}





function KeyPressed(){
  if(keyCode===UP_ARROW){
   Matter.Body.setPosition(paper.body,{x:4000,y:150}); 
  }
}


function keyPressed(){
  if(keyCode===DOWN_ARROW){
    Matter.Body.setPosition(paper.body,{x:700,y:250})
  }
}