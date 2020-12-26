class Tree{
    constructor(x,y,width,height){
        var options = {
            isStatic: true,
        }

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.image = loadImage("Plucking mangoes/tree.png");
      World.add(world, this.body);
}
        
display(){
        push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, this.x, this.y, 500, 500);
        pop();
}
    }
      