const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;

var img, e1,e2,e3;

var safety1,safety2,safety3,safety4;

var  med1,med2;

var home1,home2,home3;

var mg,e1x,e1y,img2;

var PLAY=1;

var END=0

var gs=PLAY;

var bg_img;

var score;

function preload(){
  
 bg1=loadImage("sprites/bg1.jpg");
 mgI=loadImage("sprites/mg.png");
 bg2= loadImage("sprites/bg2.jpg");
 bg_img=bg1;
 badguy1_img = loadImage("sprites/badguy1.png");
 badguy2_img = loadImage("sprites/badguy2.png");
}

function setup(){

createCanvas(1000,400);

engine=Engine.create();

world = engine.world;

score=0;

mg = createSprite(75,150,10,40);
mg.addImage(mgI);
mg.scale=0.20;

badguy1 = createSprite(800,250,10,30);
badguy1.addImage(badguy1_img);
badguy1.scale=0.25; 
badguy1.velocityX=-3;
badguy1.velocityY=-3;

badguy2 = createSprite(300,250,10,30);
badguy2.addImage(badguy2_img);
badguy2.scale=0.5; 
badguy2.velocityX=3;
badguy2.velocityY=3;


//image1 = image(img,600,200,2000,1200);

e1 = new Edu(200,200)
e1x=e1.body.position.x;
e1y=e1.body.position.y;
e2 = new Edu(400,100)
e3 = new Edu(800,150)

safety1 = new Safety(900,100)
safety2 = new Safety(100,350)
safety3 = new Safety(200,100)
safety4 = new Safety(700,300)

med1 = new Med(900,350)
med2 = new Med(500,200)

home1 = new Home(70,250)
home2 = new Home(750,50)
home3 = new Home(40,40)

}

function draw(){
  background(bg_img);
  textSize(24);
  fill("red")
  text("Wellness : "+score+"%",600,120);


if(gs === PLAY){
 // img1=bg1;

    background(bg1);
}
edges = createEdgeSprites();
badguy1.bounceOff(edges);
badguy2.bounceOff(edges);
drawSprites();
Engine.update(engine);
e1.display();
console.log(mg.x);
e2.display();
e3.display();
safety1.display();
safety2.display();
safety3.display();
safety4.display();
med1.display();
med2.display();
home1.display();
home2.display();
home3.display();
touching();

if(mg.isTouching (badguy1)){
  bg_img=bg2 
  //mg.destroy();
  score=score-1;
  gs=END;
}
if(mg.isTouching (badguy2)){
  bg_img=bg2 
  //mg.destroy();
  score=score-3;
  gs=END;
}
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
  
      mg.x=mg.x-20;    
  
    } else if (keyCode === RIGHT_ARROW) {
      mg.x=mg.x+20; 
    }
    else if (keyCode === DOWN_ARROW) {
       mg.y=mg.y+5;
    }
    else if (keyCode === UP_ARROW){
        mg.y=mg.y-5;
    }
  }

  function touching(){
    if(mg.x===35){
      score=score+0.25;
    }
    if(mg.x===75){
      score=score+0.25;
    }
    if(mg.x===755){
      score=score+0.25;
    }
    if(mg.x===95){
      score=score+0.25;
    }
    if(mg.x===215){
      score=score+0.25;
    }
    if(mg.x===895){
      score=score+0.25;
    }
    if(mg.x===65){
      score=score+0.25;
    }
    if(mg.x===395){
      score=score+0.25;
    }
    if(mg.x===195){
      score=score+0.25;
    }
    if(mg.x===795){
      score=score+0.25;
    }
    if(mg.x===495){
      score=score+0.25;
    }
    if(mg.x===895){
      score=score+0.25;
    }

  }