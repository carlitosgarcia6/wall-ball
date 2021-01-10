var ball,ball_img,paddle,paddle_img;
function preload() {
  /* preload your images here of the ball and the paddle */
  ball_img = loadImage("ball.png");
  paddle_img = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
    ball = createSprite(50,50,100,20)
    paddle = createSprite(370,50,20,20)
  /* assign the images to the sprites */
  ball.addImage(ball_img);
  paddle.addImage(paddle_img)
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9
  ball.velocityY = 9

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[0])
  ball.bounceOff(edges[2])
  ball.bounceOff(edges[3])
  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(paddle)
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  paddle.y = mouseY
  drawSprites();
  
}

