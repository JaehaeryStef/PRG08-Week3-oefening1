/// <reference path="wheel.ts"/>

class Car {
    
    public behaviour: Behaviour;

    public speed: number;
    public div: HTMLElement;
    public x: number;
    public y: number;
    public wheel1: Wheel;
    public wheel2: Wheel;
    // private state: number;
    private jumpDirection: number;
    
   

    constructor(parent: HTMLElement) {
        this.div = document.createElement("car");
        parent.appendChild(this.div);

        //this.state = 1;
        this.behaviour = new Driving(this);

        this.speed = 2;
        //this.jumpDirection = -3;
        this.x = 0;
        this.y = 220;

        this.wheel1 = new Wheel(this.div, 20);
        this.wheel2 = new Wheel(this.div, 100);

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
    }


    private onKeyDown(e: KeyboardEvent): void {
        console.log(e.key);
        
        //this.behaviour.onKeyDown();
        
        
      
    }

    public draw(): void {
        this.behaviour.draw();
        
        
        // if (this.state == 1) {
           
        // } else if (this.state == 2) {
        //     this.x += this.speed;
        //     this.y += this.jumpDirection;
        //     if (this.y < 140) this.jumpDirection = 3;
        //     if (this.y > 217) this.state = 3;

        // } else if (this.state == 3) {
        //     this.wheel1.speed = -2;
        //     this.wheel2.speed = 2;
        //     this.div.classList.add("crashed");

        //     // gameOver functie van game aanroepen via singleton
        //     document.getElementById("plateau").classList.add("animationpaused");
        //     document.getElementById("sky").classList.add("animationpaused");

        // } else if (this.state == 4) {
        //     this.speed -= 0.1;
        //     this.x += this.speed;
        // }


        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        this.wheel1.draw();
        this.wheel2.draw();
    } 


}