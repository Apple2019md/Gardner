class Loop{
    constructor(x, y){
        var options ={
            isStatic : true
        }
        this.body = Bodies.circle(x, y, 40, options);
        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;

        push();

        ellipseMode(RADIUS);
        strokeWeight(6);
        stroke("green");
        noFill();
        ellipse(pos.x, pos.y, 40, 30);


        pop();
    }
}