//declaration of object

/*
objectname={
    key:value} or fuction()

*/


//Normal function declaration.
/*
hello=function(){
    console.log(`Hello shanto`);
}

*/



const person1={
    fist_name:"Shah",
    last_name:"sultan",
    age:30,
    
    hello:function(){
        console.log(`Hello shanto`);
    },

    //short form of function declaration
    greet:()=>{
        console.log('welcome to our page');
    },
}

console.log(person1.fist_name);
console.log(person1.last_name);
console.log(person1.age);
person1.hello();
person1.greet();
