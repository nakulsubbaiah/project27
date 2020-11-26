class rope{
    constructor(body1,body2,offsetX,offsetY){

        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope=Constraint.create(options);
        //World.add(world,this.chain);

    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        strokeWeight(4);
        fill("white");
        var poinx=pointA.x
        var poiny = pointA.y
        var poin2x=pointB.x+this.offsetX
        var poin2y = pointB.y+this.offsetY
        line(poinx,poiny,poin2x,poin2y)
        

    }
}