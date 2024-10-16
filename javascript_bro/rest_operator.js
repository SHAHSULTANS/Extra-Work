//rest parameter=(...rest) allow a function work with a variable number of argument by building them into array.

//spread=expands an array into seperate element
//rest=bundles seperate elements into an array.



// function opernFridge(...foods){
//     //console.log(foods);
//     return foods;
// }

// food1="pizza";
// food2="hamberger";
// food3="sushi";
// food4="hotdog";
// foods=opernFridge(food1,food2,food3,food4);
// console.log(foods);



// function sum(...numbers)
// {
//     let res=0;
//     for(let number of numbers)
//     {
//         res+=number;
//     }
//     return res;
// }
// const total=sum(1,2,3,4,5);
// console.log(total);


function combine(...name)
{
    return name.join(" ");
}

let fullname=combine("Md","Shah","sultan");
console.log(fullname);
