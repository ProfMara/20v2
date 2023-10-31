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

}


function draw() {
    background("blue");
    Engine.update(engine);
    

}
