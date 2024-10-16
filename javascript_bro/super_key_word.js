


class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    move(speed ){
        console.log(`The ${this.name} moves a speed of ${speed}`);
    }
}

class Rabiit extends Animal{
    constructor(name,age,runspped){
        super(name,age);
        this.runspped=runspped;
    }
    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runspped);
    }
}

class Fish extends Animal{
    constructor(name,age,swimspeed){
        super(name,age);
        this.swimspeed=swimspeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimspeed);
    }

}

const rabit=new Rabiit("rabbit",1,25);
const fish=new Fish("Fish",2,12);

console.log(rabit.name);
console.log(fish.age);
rabit.run();
fish.swim();