var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var side,side2,side3

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 20,20);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.1
	sideSprite=createSprite(400,655,200,20)
	isStatic:true;
	side2Sprite=createSprite(490,600,20,100)
	isStatic:true;
	side3Sprite=createSprite(310,600,20,100)
	isStatic:true;
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width/2 , 200 ,20 ,20, {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	//Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);



}


}
