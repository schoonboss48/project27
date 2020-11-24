
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roof()
bop1 = new Bop(300,300)
bop2 = new Bop(350,300)
bop3 = new Bop(400,300)
bop4 = new Bop(450,300)
bop5 = new Bop(500,300)
rope1 = new Rope(bop1.body,roof.body,-100)
rope2 = new Rope(bop2.body,roof.body,-50)
rope3 = new Rope(bop3.body,roof.body,0)
rope4 = new Rope(bop4.body,roof.body,50)
rope5 = new Rope(bop5.body,roof.body,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  bop1.display();
  bop2.display();
  bop3.display();
  bop4.display();
  bop5.display();
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bop1.body,bop1.body.position,{x: -50, y:-50})
	}
}


