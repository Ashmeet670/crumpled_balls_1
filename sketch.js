
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper,ground
var bin1,bin2,bin3

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(200,200,30,30,"red")
	ground = new Ground(600,350,width,20,"white")

	bin1 = new Bin(1080,281,20,100,"green");
	bin2 = new Bin(930,281,20,100,"green");
	bin3 = new Bin(1005,330,150,20,"green");

	wall = new Bin(1200,40,20,600,"red")
	

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  if(keyDown("up_arrow")){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-14});
  }
  
	paper.x = paper.x
	paper.y = paper.y

	paper.display();
	ground.display();
	
	bin1.display();
	bin2.display();
	bin3.display();

	wall.display();
	


  drawSprites();
 
}



