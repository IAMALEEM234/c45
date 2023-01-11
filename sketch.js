var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){

  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {


  createCanvas(windowWidth,windowHeight);

  //adding the backround image
  bg = createSprite(dispplayWidth-1150, displayheight-300, 50, 50,);
  player.addImage(hooterImg)
  bg.scale = 1.1


  //creating the player sprite
  player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage(shooterImg)
    player.scale = 0.3
    player.debug = true
    player.setCollider("rectangle",0,0,300,300)
 

}

function draw(){
  backround(0);




  //moving the player up and down and making the game mobile compatible using touch
  if(keyDown("UP_ARROW")||touches.length>0){
    player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
    player.y = player.y+30
  }


  //release bullets and change the image of shooter to shooting position when space is pressed
  if(KeyWentDown("space")){

    player.addImage(shooter_shooting)

  }

  //player goes back to original standing once we stop pressing the space bar
else if (KeyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();

}