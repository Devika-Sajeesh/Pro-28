class Mango{
    constructor(x,y,r){

        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }

        this.x=x;
		this.y=y;
        this.width;
        this.height;
        this.body= Bodies.rectangle(this.x,70, this.width,this.height, options)
        this.image = loadImage("Plucking mangoes/mango.png");
		World.add(world, this.body);

    }
    display(){
       // var paperpos = this.body.position;
       // paperpos = this.position;
        push();
        //translate(paperpos.x,paperpos.y);
        image(this.image, this.x, this.y, 30,30);
        pop();
    }
}