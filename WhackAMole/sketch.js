var bg
var hole1,hole2,hole3,hole4,hole5,hole6,hole7,hole8,hole9,hole10,hole11,hole12,hole13,hole14,hole15,hole16,hole17,hole18,hole19,hole20
var holeImg
var redalien,redalienimage,greenalien,greenalienimage,purplealien,purplealienimage,bluealien,bluealienimage;
var redaliengroup,bluealiengroup,greenaliengroup,purplealiengroup;
var hammer, hammerImg
function preload(){
  bg=loadImage("images/grass 2.png")
  
  redalienimage=loadImage("images/alien4.png")
  greenalienimage=loadImage("images/alien1.png")
  purplealienimage=loadImage("images/alien2.png")
  bluealienimage=loadImage("images/alien3.png")
 hammerImg=loadAnimation("images/h1.png","images/h2.png","images/h3.png","images/h4.png")


  
  holeImg=loadImage("images/holeImg.png")
  
  
}


function setup()

 {
    createCanvas(1200,800);

   
    hole1=createSprite(120,250,100,100)
    hole1.addImage("hole2",holeImg)
    hole1.scale=0.3

    hole2=createSprite(1050,300,100,100)
    hole2.addImage("hole3",holeImg)
    hole2.scale=0.3

    hole3=createSprite(1100,550,100,100)
    hole3.addImage("hole4",holeImg)
    hole3.scale=0.3

    hole4=createSprite(700,320,100,100)
    hole4.addImage("hole5",holeImg)
    hole4.scale=0.3

    
    hole5=createSprite(880,700,100,100)
    hole5.addImage("hole7",holeImg)
    hole5.scale=0.3

   

    hole6=createSprite(120,480,100,100)
    hole6.addImage("hole9",holeImg)
    hole6.scale=0.3

   

    hole7=createSprite(400,330,100,100)
    hole7.addImage("hole11",holeImg)
    hole7.scale=0.3

    hole8=createSprite(360,530,100,100)
    hole8.addImage("hole12",holeImg)
    hole8.scale=0.3



  

    hole9=createSprite(550,700,100,100)
    hole9.addImage("hole16",holeImg)
    hole9.scale=0.3


   

    hole10=createSprite(900,400,100,100)
    hole10.addImage("hole18",holeImg)
    hole10.scale=0.3

    hole11=createSprite(700,550,100,100)
    hole11.addImage("hole19",holeImg)
    hole11.scale=0.3

    hole12=createSprite(200,700,100,100)
    hole12.addImage("hole20",holeImg)
    hole12.scale=0.3

    hammer=createSprite(200,200,100,100)
    hammer.addAnimation("hammer",hammerImg)
    hammer.scale=0.8
 
    redaliengroup= new Group()
    bluealiengroup= new Group()
    greenaliengroup= new Group()
    purplealiengroup= new Group()
  
    
}

function draw() 
{
 background(bg)
  
 hammer.x=mouseX;
 hammer.y=mouseY;

 var r =Math.round(random(1,4))
 switch(r){
 case 1:spawnredaliens();
 break; 

 case 2:spawnbluealiens();
 break; 

 case 3:spawnpurplealiens();
 break; 

 case 4:spawngreenaliens();
 break; 

 
 }
 if(hammer.isTouching(redaliengroup))
 {
   redaliengroup.destroyEach()
   redalien.lifetime=0;
 }
  drawSprites()

  
}

function spawnredaliens(){
  redalien = createSprite(200,200 , 1, 1);
  redalien.addImage(redalienimage);
  redalien.scale = 1
  //redalien.lifetime = 150;
  redaliengroup.add(redalien)
}

function spawngreenaliens(){
  greenalien= createSprite(300, 300, 10, 10);
  greenalien.addImage(greenalienimage);
  greenalien.scale = 0.7;
  greenaliengroup.add(greenalien)
}
function spawnbluealiens(){

  bluealien = createSprite(400, 400, 10, 10);
  bluealien.addImage(bluealienimage);
  bluealien.scale=1;
  bluealiengroup.add(bluealien)
}

function spawnpurplealiens(){
  
    purplealien = createSprite(500, 500, 10, 10);
    purplealien.addImage(purplealienimage);
    purplealien.scale = 1;
    purplealiengroup.add( purplealien)

}

 
