

//synchronous=execute line by line consecutively in a sequential manner//Code that waits for an operation to complete.


//Asynchronous=Allows multiple operations to be performed concurrently without waiting 
//doesn't block the execution flow and allows the program to continue (I/O operations, network requests, fetching data) 
//Handle with: callbacks,promises,Asyn/Await.




//Asynchronous.
// setTimeout(() => {
//     console.log("Task 1");
    
// },3000);

// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");




//step 2 syn

function fun1(callbacks){
    setTimeout(() => {
        console.log("Task 1");
        
    callbacks()},3000);

}


function fun2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");

}

fun1(fun2);