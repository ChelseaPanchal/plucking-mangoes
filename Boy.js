class Boy
{

    constructor (x,y) 
    {
        this.x = x;
        this.y = y;
        this.image = loadImage("boy.png");

        var options = 
        {
            isStatic : true,
        }

        this.body = Bodies.rectangle(this.x,this.y,1800,20,options);
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill(255,255,0);
        strokeWeight(3);
        //rect(0,0,1600,20);
        imageMode(CENTER);
        image(this.image, 0, 0, 400,400);
        pop();
    }



}