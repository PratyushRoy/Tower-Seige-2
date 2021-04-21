class GreenBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
        this.visibility=255;
        this.image=loadImage("block.png");
    }

    display(){
        fill(87, 200, 206);
        if(this.body.speed<3){
            super.display(); 
             }
             else{
                 World.remove(world,this.body);
                 push();
                 this.visibility=this.visibility-5;
                 tint(255,this.visibility);
                 image(this.image,this.body.position.x,this.body.position.y,20,30);
                 pop();
               }
             
         }
     }
