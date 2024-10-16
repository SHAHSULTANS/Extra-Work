
//reduce the elements of an array to a single value...........



const numbers=[1,2,3,4,5];
const total=numbers.reduce(sum);
console.log(total);


function sum(prev,next){
    return prev+next;
    //return Math.max(next,prev);
    //return Math.min(next,prev);
}