
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

let engine;
let world;

var ground;

var top_wall;
var ball;

var btn1;
var btn2;

var chain1
var ball2
var chain2
function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.95,
  }
  var ball2_options = {
    restitution: 0.95
  }


  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);





  ground = new Ground(200, 390, 400, 20);


  ball = Bodies.circle(100, 200, 20, ball_options);
  World.add(world, ball);

  ball2 = Bodies.circle(200, 200, 20, ball2_options);
  World.add(world, ball2);


  chain1 = Constraint.create({
    length: 150,
    stiffness: 0.7,
    pointA: { x: 200, y: 20 },
    bodyB: ball,
  })
  World.add(world, chain1)

  chain2 = Constraint.create({
    length: 100,
    stiffness: 0.01,
    bodyA:ball,
    bodyB:ball2
   })
   World.add(world,chain2)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background(51);
  Engine.update(engine);



  ellipse(ball.position.x, ball.position.y, 20);
  ground.show();

  ellipse(ball2.position.x, ball2.position.y, 20);

  //line(x1,y1,x2,y2)
  push()
  stroke("blue")
  strokeWeight(3)
  line(chain1.pointA.x, chain1.pointA.y, ball.position.x, ball.position.y)

  line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y)
  pop()


}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}



