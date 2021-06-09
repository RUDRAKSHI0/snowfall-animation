class Snowflakes {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,

        }
        this.r = 80;
        this.body1 = Bodies.circle(x, y, this.r, options);
       // this.color = color(random(0,255),random(0,255),random(0,255))
       this.image1 =loadImage("snow4.webp");
        World.add(world,this.body1);
    }
display(){

    var pos = this.body1.position;
    var angle = this.body1.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image1,0,0,this.r,this.r);
    pop();
			

}
}