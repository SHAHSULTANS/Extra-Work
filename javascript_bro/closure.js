//closure= A function defined inside of another function has to access to the variable and scope of outer function.

//closure are often used to create private variables and functions in JavaScript.
//that means Allow for private variable.
//closure can maintaince state of variable.


/*
function outer(){
    let message="Hello";
    function innner(){
        console.log(message);
    }
    //step1 
    // innner();

    //step 2
    return innner;
}

message="goodbye";
//step 1
// outer();


//step 2
let fun=outer();
fun();


*/







//-----------maintaince state of variable----------------

// function createCounter() {
//     let count = 0;

//     function increment() {
//         count++;
//         console.log(`count increased to ${count}`);
//     }
//     return increment;

// }
// const counter=createCounter();
// counter();
// counter();
// console.log(counter());//here undefined.





function createCounter(){
    let count=0;
    function increment(){
        count++;
        console.log(`count increase to ${count}`);
    }

    function getCount(){
        return count;
    }
    return{
        increment:increment,
        getCount:getCount,
    };
}
const counter=createCounter();
counter.increment();
counter.increment();
console.log(`The total count is ${counter.getCount()}`);