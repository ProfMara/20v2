const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var solo, caixa, caixinha, caixa2;
var parado;
var mexendo;


function setup() {
    createCanvas(400, 400);

    engine = Engine.create();
    world = engine.world;

    parado = { isStatic: true }

    solo = Bodies.rectangle(200, 390, 400, 20, parado);
    World.add(world, solo);

    rectMode(CENTER);
    ellipseMode(RADIUS);
}


function draw() {
    background("blue");
    Engine.update(engine);
    fill("brown")
    rect(solo.position.x, solo.position.y, 400, 20);

}