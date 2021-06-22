

function preload(){
  bg= loadImage('iss.png');
  bath=loadAnimation('bath1.png','bath2.png');
  brush=loadAnimation('brush.png');
  drink=loadAnimation('drink1.png','drink2.png');
  eat=loadAnimation('eat1.png','eat2.png');
  gym=loadAnimation('gym1.png','gym2.png','gym11.png','gym12.png');
  sleep=loadImage('sleep.png');

}
function setup() {
  createCanvas(800,400);
 
edges= createEdgeSprites();

  

astr=createSprite(300,230);
astr.addAnimation('sleeping',sleep);
astr.scale=0.1

}
function draw() {
  background(bg);  
astr.bounceOff(edges);

if(keyDown(UP_ARROW)){
astr.addAnimation('brushing',brush)
astr.changeAnimation('brushing')
astr.y=350
astr.x=350;
astr.velocityX=0;
astr.velocityY=0;
}
if(keyDown(DOWN_ARROW)){
  astr.addAnimation('gymming',gym)
  astr.changeAnimation('gymming')
  astr.y=350
  astr.x=450;
  astr.velocityX=0;
  astr.velocityY=0;
  }
  if(keyDown(LEFT_ARROW)){
    astr.addAnimation('eating',eat)
    astr.changeAnimation('eating')
    astr.y=350;
    astr.x=550;
    astr.velocityX=0;
    astr.velocityY=0;
    }
    if(keyDown(RIGHT_ARROW)){
      astr.addAnimation('bathing',bath)
      astr.changeAnimation('bathing')
      astr.y=350;
      astr.x=250;
      astr.velocityX=0;
      astr.velocityY=0;
      }
    
      if(keyDown('M')){
       
        
        astr.velocityX=2;
        astr.velocityY=2;
        }

  drawSprites();
  fill('red')
  textSize(25);
  text('Instructions', 600,30);
  textSize(20);
  text('Up Arrow= Brushing',590,50);
  text('Down Arrow= Gymming',590,70);
  text('left Arrow= eating',590,90); 
  text('Right Arrow= Bathing',590,110);

}