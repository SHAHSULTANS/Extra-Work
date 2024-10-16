

/*
function sayHello(){
    window.alert("Hello");
}

setTimeout(sayHello,3000);

setTimeout(() => {
    window.alert("hello");
}, 3000); */



let timoutId;
function startTimer(){
    timoutId=setTimeout(()=>{
        window.alert("Hello");
        console.log("Started");

    },2000)
}

function clearTimer(){
    clearTimeout(timoutId);
    console.log("Clear");
}