const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;
var thread1,thread2,thread3,thread4,thread5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roof
	var roof_options={
		isStatic:true			
	}
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	 //roof = new Roof(400,100,230,20);
  

	//bobs
    var bob1_options  = {
		isStatic :true
	}
	bob1 = Bodies.circle(300,300,35,bob1_options);
	World.add(world,bob1);
    bob2 = Bodies.circle(346,300,35,bob1_options);
	World.add(world,bob2);
	bob3 = Bodies.circle(392,300,35,bob1_options);
	World.add(world,bob3);
	bob4 = Bodies.circle(438,300,35,bob1_options);
	World.add(world,bob4);
	bob5 = Bodies.circle(484,300,35,bob1_options);
	World.add(world,bob5);

	thread1 = new Rope(bob1,roof,-100,0);
    console.log(thread1)
	Engine.run(engine);
	fill("yellow");
	ellipseMode(CENTER);
	rectMode(CENTER)
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

 rect(roof.position.x,roof.position.y,230,20);
 
 thread1.display()
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,35);
  ellipse(bob2.position.x,bob2.position.y,35);
  ellipse(bob3.position.x,bob3.position.y,35);
  ellipse(bob4.position.x,bob4.position.y,35);
  ellipse(bob5.position.x,bob5.position.y,35);

//roof.display();

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
// function keyPressed()
// {
//   if(keyCode==RIGHT_ARROW)
//     {
//       Matter.Body.applyForce(bob1,{x:0,y:0},{x:2,y:0});
//     }
// }
