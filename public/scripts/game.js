class Car{
    constructor(x, y, angle){
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.speed = 2;
    }

    moveForward(){
        this.x += this.speed * Math.cos(this.angle * Math.PI / 180);
        this.y += this.speed * Math.sin(this.angle * Math.PI / 180);
    }

    moveBack(){
        this.x -= this.speed * Math.cos(this.angle * Math.PI / 180);
        this.y -= this.speed * Math.sin(this.angle * Math.PI / 180);
    }

    turnLeft(){
        this.angle = this.angle - 5;
    }

    turnRight(){
        this.angle = this.angle + 5;
    }

    update(){
        let car = $(".car-img");

        car.css({
        top: this.y + 'px',
        left: this.x + 'px',
        transform: `rotate(${this.angle}deg)`
    });
    }
}

$(function(){
    let myCar = new Car(100,100,0);

    $(document).keydown(function(e){
        if (e.key ==='w' || e.key === 'ArrowUp'){
            myCar.moveForward();
        }

         if (e.key ==='s' || e.key === 'ArrowDown'){
            myCar.moveBack();
        }

         if (e.key ==='a' || e.key === 'ArrowLeft'){
            myCar.turnLeft();
        }

         if (e.key ==='d' || e.key === 'ArrowRight'){
            myCar.turnRight();
        }

        myCar.update();

    });


});