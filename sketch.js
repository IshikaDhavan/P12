var runner,path;
var pathImg, runnerImg;
function preload(){
  //pre-load images
pathImg = loadImage("path.png");
runner_running=loadAnimation("Runner-2.png","Runner-2.png","Runner-1.png","Runner-1.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.scale=1;
  runner=createSprite(200,280,50,50);
  runner.addAnimation("running",runner_running);
runner.scale=0.1;
invisibleGround=createSprite(65,200,10,330);
 invisbleGround2=createSprite(345,220,10,330);
invisibleGround.visible=false;
invisbleGround2.visible=false;



}

function draw() {
  background(0);
  path.velocityY=-2;
  if(path.y<0){
    path.y=path.height/2
  }
createEdgeSprites();
runner.bounce(invisibleGround);
runner.bounce(invisbleGround2);


  runner.x=World.mouseX;
  drawSprites();
}
