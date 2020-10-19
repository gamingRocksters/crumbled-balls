
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var balll;
var ground,boxCover,boxCover2,boxCover3;
var dustbin,dustbinImg;

function preload()
{
	dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	dustbin = createSprite(648,580,100,20);
	dustbin.scale = 0.5;
   dustbin.addImage(dustbinImg)

	balll = new Ball(82,350,40,40);
	ground = new Rectangle(400,height-20,width,20);

	boxCover = new Dustbin(648,652,100,20);
	boxCover2 = new Dustbin(700,570,20,150);
	boxCover3 = new Dustbin(595,570,20,150);
	//Create the Bodies Here.
	keyPressed();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  


  text(mouseX+","+mouseY,mouseX,mouseY);

 

balll.show();
ground.show();
boxCover.show();
boxCover2.show();
boxCover3.show();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(balll.body,balll.body.position,{x:195,y:-195});
	}

}


