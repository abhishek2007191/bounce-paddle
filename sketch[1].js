var ball,img,paddle;


function preload() {
this.image = loadImage("ball.png"); 
this.image = loadImage("paddle.png");
 
  
}
function setup() {
  createCanvas(400, 400);
   ball = createSprite(200,200,20,20);
   paddle = createSprite(390,200,20,90);
 
  ball.velocityY = -2;
  ball.velocityX = -3;
  
  
}

function draw() {
  background(205,153,0);
  edges = createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  paddle.collide(edges[2]);
  paddle.collide(edges[3]);
  ball.bounceOff(paddle);

  
  if(keyDown(UP_ARROW))
  {
    paddle.velocityX = 0;
    paddle.velocityY = -2;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityX = 0;
    paddle.velocityY = 2;
  }
  

  drawSprites();
  
}

