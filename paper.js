class Paper {
 
constructor(x,y,r){

  var options={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
  }
  
  this.body=Bodies.circle(x,y,(r-20)/2,options);
  this.r=r;
  this.x=x;
  this.y=y;
  this.image=loadImage("sprites.js/paper.png");

  World.add(world,this.body);
  
}
  display(){

    push();
    translate(this.body.position.x, this.body.position.y);
     fill("red");
     imageMode(CENTER);
    image(this.image,80,370,this.r,this.r);
   pop();
    
  }
   
}
