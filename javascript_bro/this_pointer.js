/* this = reference to the object where this is used
          (the object deponds on the intermediate context)
          Person.name=this.name
*/

// this keword doesn't work with arrow function.


//show window object.
// console.log(this);



const Person={
    name:"shanto",
    favfood:"rice",
    sayHello:function(){
        console.log(`HI! I am ${Person.name}`);
    },
    eat:function(){
        console.log(`${this.name} is eating ${this.favfood}`);
    },
}

Person.sayHello();
Person.eat();