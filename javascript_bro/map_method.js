


// const numbers=[1,2,3,4,5];
// let square=numbers.map(sq);


// console.log(square);

// function sq(element){
//     return Math.pow(element,3);
// }




// const students=[`Shanto`,`sultan`];

// const studentUpper=students.map(upper)
// console.log(students);
// console.log(studentUpper);


// function upper(element){
//     return element.toUpperCase();
// }



const dates=["2024-1-10","2025-2-20","2026-3-30"];

const fmDate=dates.map(formateDates);
console.log(fmDate);


function formateDates(element){
    const part=element.split("-");

    return`${part[2]}/${part[1]}/${part[0]}`;
}