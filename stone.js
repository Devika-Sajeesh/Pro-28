class Stone{
    constructor(x,y,width,height){

        var options = {
            isStatic:false,
            restitutions:0,
            friction:1,
            density:1.2
        }

        this.x=x;
		this.y=y;
        //this.r=50;
       this.width= width/2;
        this.height = 670;
        this.body= Bodies.rectangle(this.x,70, this.width,this.height, options)
        this.image = loadImage("Plucking mangoes/stone.png");
		World.add(world, this.body);

    }
    display(){
        
        push();
        
        image(this.image, 120, 540, 50,50);
        pop();
    }
}