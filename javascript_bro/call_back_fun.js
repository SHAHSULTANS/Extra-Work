//calback= a function that is passed as an argument to another function.



// function hello(){
//     console.log(`hello`);
// }
// function goodbye(){
//     console.log(`Goodbye`);
// }



// function hello(){
//     setTimeout(function(){
//         console.log(`hello`);
//     },3000)
// }
// function goodbye(){
//     console.log(`Goodbye`);
// }

// hello();
// goodbye()





// function hello(callback){
//     console.log(`hello`);
//     callback();
// }
// function goodbye(){
//     console.log(`Goodbye`);
// }

// hello(goodbye)




//let's another example.

function sum(display,a,b){
    let result=a+b;
    display(result);
}

function display(result){
    console.log(`result is: ${result}`);
}

function displayInpage(result){
    document.getElementById("myH1").textContent=result;
}
 

sum(displayInpage,3,5);