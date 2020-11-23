class Edu{
    constructor(x,y){
    var options = {
       isStatic:true

    }
    this.body=Bodies.rectangle(x,y,60,60,options);
    this.width=60;
    this.height=60;
    this.image=loadImage("sprites/edu.png");
    World.add(world,this.body)
    }
    display(){
    var p = this.body.position;
    var a = this.body.angle;
    
    push();
    translate(p.x,p.y);
    rotate(a);
    imageMode(CENTER)
    image(this.image ,0,0,this.width,this.height);
    pop();
    }
}