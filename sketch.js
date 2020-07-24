var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;
var box1, box2, box3, box4, box5;
var chain;
var score = 0;


function setup() {
  createCanvas(1200,400);
  createSprite(400, 200, 50, 50);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,400,1200,20);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    paper = new paperObject(50,50,70);
    chain = new Slingshot(paper.body,{x:200,y:100});
    Engine.run(engine);
}

function draw() {
  background(220); 
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  paper.display();
  chain.display();
  textSize(25);
  fill(255);
  text("score"+score,width-300,50);

  drawSprites();
}
function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  chain.fly();
  
}