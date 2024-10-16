

// let numbers=[1,10,3,2,5,4];
// console.log(typeof(numbers));
// numbers.sort((a,b)=> a-b);//because numbers.sort() is sorted the array is lexographical order.
// console.log(numbers);



var students=[{name:"shanto",age:29,grade:"A"},
              {name:"Shah sultan",age:24,grade:"B"},
              {name:"sultan",age:28,grade:"A"}];


// students.sort((a,b)=>a.age-b.age);//similar sorted by different property.
// console.log(students);



//for sorting alphabitical order. we have to use build in localeCompare() method.
students.sort((a,b)=>a.name.localeCompare(b.name));
console.log(students);
