class paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.5,
            friction:0.5,
            density:0.5  
           
          }
          //this.x=x;
          //this.y=y;
         // this.r=r;
          this.body = Bodies.rectangle(x,y,30,30,options);
            this.width=30
            this.hight=30
             World.add(world,this.body)
    }
    display(){
       //var paperpos=this.ball.position
        var angle=this.body.angle;
       // paperpos.x=mouseX
        //paperpos.y=mouseY
        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(angle)
        rectMode(CENTER)
        strokeWeight(3);
        fill(255,0,255);
        ellipse(100,0,30,30)
        pop()
       
    }
}



  