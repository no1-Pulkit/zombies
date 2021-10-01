var zombies
var shooter
var bg
var bgImg
var shootingImg
var standingImg
var edges
var standing
var zombies
var zombiesImg
var zombiesGroup
var heart1,heart1Img
var heart2,heart2Img
var heart3Img,heart3
function preload(){
shootingImg =loadImage("assets/shooter_3.png")
standingImg =loadImage("assets/shooter_2.png")
bgImg =loadImage("assets/bg.jpeg")
zombiesImg =loadImage("assets/zombie.png")
heart1Img =loadImage("assets/heart_1.png")
heart2Img =loadImage("assets/heart_2.png")
heart3Img =loadImage("assets/heart_3.png")
}
function setup(){
createCanvas(windowWidth,windowHeight)
bg=createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale=1.3
shooter=createSprite(displayWidth-1150,displayHeight-300,50,50)
shooter.addImage(standingImg)
shooter.scale=0.3
shooter.setCollider("rectangle",0,0,300,300)
edges=createEdgeSprites()
zombiesGroup =new Group()
heart1 =createSprite(displayWidth-100,40,20,20)
heart1.visible=false
heart1.addImage("heart1",heart1Img)
heart1.scale =0.4
heart2 =createSprite(displayWidth-100,40,20,20)
heart2.visible=false
heart2.addImage("heart2",heart2Img)
heart2.scale =0.4
heart3 =createSprite(displayWidth-100,40,20,20)
heart3.visible=true
heart3.addImage("heart3",heart3Img)
heart3.scale =0.4


}
function draw(){
    if(keyDown("UP_ARROW")){
        shooter.y=shooter.y-30
    }
    if(keyDown("DOWN_ARROW")){
        shooter.y=shooter.y+30
    }
    if(keyWentDown('space')){
        shooter.addImage(shootingImg)
    }
    else if(keyWentUp("space")){
        shooter.addImage(standingImg)
    }
    shooter.bounceOff(edges)
    for(var i=0;i<zombiesGroup.length;i++){
        if(zombiesGroup[i].isTouching(shooter)){
            zombiesGroup[i].destroy()
        }
    }
    createEnemy()
drawSprites()

}
function createEnemy(){
    if(frameCount % 80===0){
        zombies=createSprite(random(500,1100),random(100,500),40,40)
        zombies.addImage(zombiesImg)
        zombies.scale =0.15
        zombies.velocityX =-3
        zombies.lifetime =400
        zombies.setCollider("rectangle",0,0,40,40)
        zombiesGroup.add(zombies)
    }
}