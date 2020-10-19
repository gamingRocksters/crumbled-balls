class Ball{
    constructor(x,y,w, h){
        var options = {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:5
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
        this.image  = loadImage("paper.png");
    }
    show(){
        var pos = this.body.position;
        fill("violet");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.w, this.h);
    }
}