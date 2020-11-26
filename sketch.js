
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5
var startBobPositionX=500;
var bobDiameter=50;
var startBobPositionY=400;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	groundSprite=createSprite(350, 100, 350,10);
	groundSprite.shapeColor=color(255)

	ground = Bodies.rectangle(width/2, 100, width, 10 , {isStatic:true} );
	//S World.add(World, ground);
	bobObject1=new Bob(startBobPositionX-bobDiameter*1,startBobPositionY,bobDiameter);	
	bobObject2=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject3=new Bob(startBobPositionX-bobDiameter*3,startBobPositionY,bobDiameter);
	bobObject5=new Bob(startBobPositionX-bobDiameter*4,startBobPositionY,bobDiameter);
	bobObject4=new Bob(startBobPositionX-bobDiameter*5,startBobPositionY,bobDiameter);
	
	rope1=new rope(bobObject1.body,ground.body,-bobDiameter*1, 0)
	rope2=new rope(bobObject2.body,ground.body,-bobDiameter*2, 0)
	rope3=new rope(bobObject3.body,ground.body,-bobDiameter*3, 0)
	rope4=new rope(bobObject4.body,ground.body,-bobDiameter*4, 0)
	rope5=new rope(bobObject5.body,ground.body,-bobDiameter*5, 0)
	engine = Engine.create();
	world = engine.world;
    var render= Render.create({
	element:document.body,
	engine:engine,
	options:{
		width:1600,
		height:700,
		wireFrammes:false
	}
}	
)	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  //rope1.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:130,y:-145});

  
	}
}


