class Ground {
 
constructor(x,y,width,height){
  
  this.body=Bodies.rectangle(x,y,width,height);
  this.width=width;
  this.height=height;
  this.x=x;
  this.y=y;
  
  World.add(world,this.body);
  
}
  display(){
    
    fill("yellow");   
    var pos = this.body.position
    rectMode(CENTER);
    rect(200,390,800,20);
        
    
  }
   
}