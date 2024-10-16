
//ES6 Module= An external file that contains reusable code that can be impor ted into other javascript files. write reusable code for many different apps. can contain variable class, functions ...and more Introduced as part of ECMAScript 2015 update.


import {PI,getCircumference,getArea,getVolume} from './mathUtil.js';

console.log(PI);

const cricmference=getCircumference(10);
const area=getArea(10);


console.log(`circumference is: ${cricmference.toFixed(2)} cm`);
console.log(`area is: ${area.toFixed(2)} cm^2`);


