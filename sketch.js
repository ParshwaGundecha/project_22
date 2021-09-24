const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher,playerArcherimage;
var baseimage;
var board,boardimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerArcherimage = loadImage("./assets/playerArcher.png");
  boardimage = loadImage("./assets/board.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  
  var options={
   isStatic:true, 
  };

  //create player base body
  playerBase=Bodies.rectangle(150,350,180,150,options);
  World.add(world,playerBase);
  
  //create player body
  player=Bodies.rectangle(210,210,50,150,options);
  World.add(world,player);

  //create player archer body
  playerArcher=Bodies.rectangle(240,180,150,150,options);
  World.add(world,playerArcher);
  
  //create board body 
  board=Bodies.rectangle(1200,180,150,150,options);
  World.add(world,board);
}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  image(playerimage,player.position.x,player.position.y,50,150);

  //show the playerbase image using image() function
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150);
  
  //show the player archer image using image() function
  image(playerArcherimage,playerArcher.position.x,playerArcher.position.y,150,150);
  
  //show the playerbase image using image() function
  image(boardimage,board.position.x,board.position.y,150,150);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
