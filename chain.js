class chain{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.04, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.chain = Constraint.create(options)
		World.add(world,this.chain)
	}

	attach(body){
		this.chain.bodyA=this.body;
	}

	fly()
	{
		this.chain.bodyA=null;
	}
 
	display()
	{
		if(this.chain.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB;

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}