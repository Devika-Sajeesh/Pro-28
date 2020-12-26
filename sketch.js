
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var ground,stone;
var boy,boyImg;
var Chain;
var mango1,mango2,mango3,mango4,mango5;
var launcher;

function preload()
{
	boyImg = loadImage("Plucking mangoes/boy.png");
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(760,460,10,10);

	ground = new Ground(600,690,1200,20);
	stone = new Stone(200,50,200);

	boy = createSprite(200,620,20,20);
	boy.addImage(boyImg);
	boy.scale=0.1;

	Chain = new chain(stone.body,{x:120,y:540});

	mango1 = new Mango(900,350,30,30);
	mango2 = new Mango(800,250,30,30);
	mango3 = new Mango(800,400,30,30);
	mango4 = new Mango(700,350,30,30);
	mango5 = new Mango(700,270,30,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();

  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  Chain.display();

	detectollision(stone,mango1);
	detectollision(stone,mango2);
	detectollision(stone,mango3);
	detectollision(stone,mango4);
	detectollision(stone,mango5);

  mouseDragged();
  mouseReleased();
  keyPressed();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    Chain.fly();
}

function keyPressed(){
if(keyCode ===32){
	Matter.Body.setPosition(stone.body,{x:235,y:420})
	launcher.attach(stone.body);
}
}

function detectollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}

}



