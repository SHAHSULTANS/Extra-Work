




const numbers=[1,2,3,4,5,6,7,8];

const evenumber=numbers.filter(even);
console.log(evenumber);



function even(element){
    return element%2==1;
    //return element>6;
}