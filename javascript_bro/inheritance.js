





class Animal{
    alive=true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name="rabbit";
    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal{
    name="fish";
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

const RabbitObj=new Rabbit();
const FishObj=new Fish();
//console.log(RabbitObj.alive);
RabbitObj.eat();
RabbitObj.sleep();
RabbitObj.run();

FishObj.eat();
FishObj.swim();
