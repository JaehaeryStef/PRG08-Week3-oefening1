class Driving implements Behaviour{
    
    car: Car;
    
    constructor(c: Car){
        this.car = c;
        
    }
    draw(){
          this.car.x += this.car.speed;        
    }
}