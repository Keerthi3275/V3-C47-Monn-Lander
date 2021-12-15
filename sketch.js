let ground;
let lander;
var lander_img;
var bg_img;
//Declare variable for thrust,rcsleft,rcsright



var vx = 0;
var vy = 0;
var g = 0.05;
//Initialize variable for Fuel and assign vlaue as 100


function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  //Load thrust,crash,land,rcs_left,Rcs_right & normal images
  


  //Load sound of thrust,rcsleft,rcsright
  
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);
  //Assign value to the timer=1500
  
//Assign value to the frame Delay
  

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  //Add animation of thrusting,rcsleft,rcsright & normal
  
//Createsprite for ground
  
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  //Display Horizontal Velocity

  //Display Fuel on the screen

  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  vy +=g;
  lander.position.y+=vy;
//Give lander's X position
  

  drawSprites();
}

function keyPressed()
{
  //write if condition if up arrow pressed than change the thrusting image also to check fuel is there or not
  if(keyCode==UP_ARROW && fuel>0)
  {
    upward_thrust();
    lander.changeAnimation('thrusting');
    thrust.nextFrame();
    
  }
  
}

function upward_thrust()
{
  vy = -1;
}


