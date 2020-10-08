class Wall {
 
constructor(x,y,width,height){
  
  this.body=Bodies.rectangle(x,y,width,height);
  this.width=width;
  this.height=height;
  this.x=x;
  this.y=y;
  this.image=loadImage("sprites.js/dustbingreen.png");

  World.add(world,this.body);
  
}
  display(){
    
     fill("white");
    var pos = this.body.position
     push()
    translate(this.body.position.x, this.body.position.y);
     pop()
    imageMode(CENTER);
    image(this.image,400,310,this.width,140);
      
  }
   
}