class Waterdrops{
    constructor(x, y){
        var options ={
            isStatic: true,
            restituition: 0.1,
            friction: 0.03
        }

        this.body = Bodies.circle(x, y, 5, options);
        World.add(world, this.body);
        
    }

    remove(index){
        setTimeout(()=>{
            
                World.remove(world, this.body);
                delete drops[index];

        

        }, 1000);
        
    }

    display(){
        var pos = this.body.position;
        push();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 5, 5);
        pop();
    }
}