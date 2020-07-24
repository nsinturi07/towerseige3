class paperObject {
    constructor(x,y,radius,options){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image=loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
       // this.body.position.x = mouseX;
       // this.body.position.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0,50);
        pop();
}
}