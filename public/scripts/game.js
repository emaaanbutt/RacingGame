class Car{
    constructor(x, y, angle){
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.speed = 2;
    }

    moveForward(){
        this.x += this.speed * cos(this.angle);
    }

    moveBack(){
        this.x += this.speed * sin(this.angle);
    }

    turnLeft(){
        this.angle = this.angle - 5;
    }

    turnRight(){
        this.angle = this.angle + 5;
    }

    update(){

    }
}

$(function(){
    let car = $()
});