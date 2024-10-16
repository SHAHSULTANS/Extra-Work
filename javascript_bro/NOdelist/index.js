
//NodeList= static collection of HTML elements by(ID,Class,Element)


//     can be created by using querySelectorAll()
//     Similar to an array, but no(map, filter,reduce)
//     Nodelist won't update to automatically reflect changes

let Btn=document.querySelectorAll(".Btn");



// console.log(Btn);
// Btn.forEach( button =>{
//     button.style.backgroundColor="green";
// })



//step Click event listener
//Similar mouseover, mouseout like click
Btn.forEach(button =>{
    button.addEventListener("click",event =>{
        event.target.style.backgroundColor="tomato";
    })
})




//ADD An Element


// const newBtn=document.createElement("button");//step 1
// //step 2;
// newBtn.textContent="Button 5";
// newBtn.classList="Btn";
// //step 3
// document.body.appendChild(newBtn);
// Btn=document.querySelectorAll(".Btn");
// console.log(Btn);




//Remove AN Element
Btn.forEach(button=>{
    button.addEventListener("click",event=>{
        event.target.remove();
        Btn=document.querySelectorAll(".Btn");
        console.log(Btn);

    })
})

