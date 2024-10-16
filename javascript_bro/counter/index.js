const decreaseBtn=document.getElementById("decreaseBtn");
const incraseBtn=document.getElementById("increaseBtn");
const resetBtn=document.getElementById("resetBtn");
const countLabel=document.getElementById("countLabel");
let count=0;

incraseBtn.onclick=function(){
    count++;
    countLabel.textContent=count;
}
decreaseBtn.onclick=function(){
    count--;
    countLabel.textContent=count;
}
resetBtn.onclick=function(){
    count=0;
    countLabel.textContent=count;
}