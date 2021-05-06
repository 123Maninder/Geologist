
class Iron{
	constructor(x,y)
	{
	// assign options to the rubber ball
	var options= {
		retitution: 10,
		friction: 5,
		density: 35
	}
		this.x=x;
		this.y=y;
		this.width=100
        this.height=50
		this.body=Bodies.rectangle(this.x, this.y, 100,50, options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
            var angle=this.body.angle;
			push()
			translate(ironpos.x, ironpos.y);
            rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("blue");
			//draw the ellipse here to display the rubber ball
        
            rect(0,0,this.width,this.height)
			pop()
	}

}