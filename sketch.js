const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
let ground;
let ball;

function setup() {
  createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;

  ground_options = {
	isStatic: true
  }

  ground = new Ground(250, 490, 500, 20, ground_options);
  World.add(world, ground);

  let ballOptions = {
    isStatic: false,
    restitution: 0.8,
    friction: 0,
    density: 1,
  };
  ball = Bodies.circle(100, 100, 15, ballOptions);
  World.add(world, ball);

  rightSide = new Ground(300,420,15,120,ground_options);
  World.add(world, rightSide);

  leftSide = new Ground(460,420,15,120,ground_options);
  World.add(world,leftSide);

  Engine.run(engine);
}

function draw() {
  background(0);
  rectMode(CENTER);
  ground.display();

  fill(255);
  ellipse(ball.position.x, ball.position.y, 40);

  fill(255)
  rightSide.display();

  fill(255);
  leftSide.display();

  shootBall();
}

function shootBall(){
  if(keyCode === UP_ARROW){
    Body.setStatic(ball,false);
    Body.setVelocity(ball,{
      x: 5, y:-5
    });
  }
}
