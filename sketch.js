
var dustbin1,dustbin2,dustbin3;
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
groundSprite=createSprite(width/2,380,width,10)
groundSprite.shapeColor=color("yellow")
//ground1=new Ground()	
dustbin1=createSprite(800,365,150,10)
dustbin2=createSprite(870,345,10,50)
dustbin3=createSprite(720,345,10,50)
dustbin1.shapeColor=color("white")
dustbin2.shapeColor=color("white")
dustbin3.shapeColor=color("white")


paper=new paper(100,320,10,10)

dustbin1=Bodies.rectangle(800,380,150,10,{isStatic:true});
  World.add(world,dustbin1);
  dustbin2=Bodies.rectangle(870,345,10,50,{isStatic:true});
  World.add(world,dustbin2);
  dustbin3=Bodies.rectangle(720,345,10,50,{isStatic:true});
  World.add(world,dustbin3);

	
  ground=Bodies.rectangle(width/2,380,width,10,{graviti:false,isStatic:true});
  World.add(world,ground);

  
//	Engine.run(engine);
  
}


function draw() {

 // rectMode(CENTER);
  background(0);
  Engine.update(engine)
  //ground1.display();
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
    Matter.Body.setPosition(paper.body,{x:700,y:150})
  }
}