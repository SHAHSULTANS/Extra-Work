/*constructor = special method for defining the
                properties and method of Object.
*/

//using new keyword.


function CAR(make,model,year,color){
    this.make=make,
    this.model=model,
    this.year=year;
    this.color=color;
    
    this.drive=function(){
        console.log(`You drive ${this.color} color car`);
    }

}

const car1= new CAR("Ford","Levo",2024,"red");// new keyword and delaration.
console.log(car1.make);
console.log(car1.model);
car1.drive();