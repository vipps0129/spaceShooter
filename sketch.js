var player,enemy1,enemy2,enemy3,explosion,laser,playerImg;
var bulletGroup,enemyGroup,bullet,enemy;
var score,gameState,input,play,name,edges;
var pass,i1,i2,flag;
function preload(){
enemy1=loadImage("enemy1.png")
  enemy2=loadImage("enemy2.png")
  enemy3=loadImage("enemy3.png")
  playerImg=loadImage("player.png")
  explosion=loadSound("explosion.mp3")
  laser=loadSound("laser.mp3")
}
function setup() {
  createCanvas(600, 400);
  
  player=createSprite(200,380,20,20);
  player.addImage("player",playerImg);
  player.scale=2
  player.visible=false
  enemyGroup=new Group();
  bulletGroup=new Group();
  edges=createEdgeSprites()
  score=0
  gameState=0
  input=createInput("")
  play=createButton("Start")
  pass=createInput("")
  i1=createElement("h4")
  i2=createElement("h4")
  flag=0
  
}

function draw() {
  background(220);
  if(gameState===0){
   input.position(230,150)
    i1.position(130,130)
    i1.html("enter name")
    i2.position(110,170)
    i2.html("enter password")
    pass.position(230,180)
    var n=pass.value()
    var p=input.value()
    play.position(300,200)
    textSize(30)
    text("Space Shooter",200,50)
    name=input.value()
    play.mousePressed(()=>{
    
     
      if(n==="vishu"&&p!=""){
      gameState=1     
        
         play.hide()
        input.hide()
      i1.hide()
      i2.hide()
      pass.hide()
}
      
      
      
      
      
    })
    
     if(n!="vishu"&&n!=""){
    textSize(30)
    text("wrong password",250,350)
      }
    
    
  }
  if(gameState===1){
  text("score "+score,10,30)
    text("Welcome "+name,270,30)
  player.visible=true
  player.x=mouseX;
  spawnenemy();
  if(keyDown("space")){
  spawnbullet();
    
     laser.play()
  }  
  if(enemyGroup.collide(edges[3])){
  gameState=2
  flag=1
  }
    if(score>=2){
     gameState=2
      flag=2
    }
     if(flag===1){
   
   textSize(50)
   text("GAME OVER",250,200)
     
   }
   if(flag===2){
      textSize(50)
   text("YOU WON",250,200)
     
     
   }
    
    
    
    
    
 if(gameState===2){
 enemyGroup.destroyEach()
   bulletGroup.destroyEach()
   player.visible=false
   
  
   
   
 } 
  
  if(bulletGroup.isTouching(enemyGroup)){
   bullet.destroy()
  enemyGroup.destroyEach()
    score++
   
    explosion.play()
  }
  
  }
  
 
  
  
  drawSprites();
}
function spawnbullet(){
  if(frameCount%5===0){
 bullet=createSprite(player.x,360,5,5)
bullet.velocityY=-6
    bulletGroup.add(bullet)
    
  }

}

function spawnenemy(){
if(frameCount%50===0){
 enemy=createSprite(random(10,590),0,10,10)
enemy.velocityY=3
var r=Math.round(random(1,3))
switch(r){
  case 1:enemy.addImage("enemy1",enemy1);break;
  case 2:enemy.addImage("enemy2",enemy2);break;
  case 3:enemy.addImage("enemy3",enemy3);break;
}
  enemyGroup.add(enemy)
}
  
}


