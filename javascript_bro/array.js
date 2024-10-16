//aray=[] a variable like structure that can be hold more than 1 value

let fruits=["apple","orange","banana"];

// fruits.push("coconut");
// fruits.unshift("mango");
// fruits.shift("mango");
// console.log(fruits.length)
// console.log(fruits.indexOf("mango"));

// for(let i=0;i<fruits.length;i++)
// {
//     console.log(fruits[i]+" ");
// }

fruits.sort().reverse();
for(let fruit of fruits)
{
    console.log(fruit)
}