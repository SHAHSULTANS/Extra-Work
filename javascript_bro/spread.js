
//spread operator= ... allows an iterable such as an array or string to be expanded into separate elements(unpacked the elements)


// let numbers=[1,2,4,5,6];
// let maximum=Math.max(...numbers);

// let minimum=Math.min(...numbers);
// console.log(minimum);
// console.log(maximum);
// console.log(numbers);



// let username="Shanto";
// let letters=[...username].join("-");
// console.log(letters)


let fruits=["apple","orange","banana"];
let vegetable=["carrots","celery"];

let foods=[...fruits,...vegetable,"milk"];
console.log(foods);