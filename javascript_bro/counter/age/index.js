const myText=document.getElementById("myText");
const mySubmit=document.getElementById("mySubmit");
const resultElement=document.getElementById("resultElement");
let age=0;

mySubmit.onclick=function(){
    age=myText.value;
    age=Number(age);
    resultElement.textContent="you are "+age+" Years old";
}