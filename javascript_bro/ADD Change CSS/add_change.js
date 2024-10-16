//........Example 1 <h1>............

//Step 1 create the element
const newH1=document.createElement("h1");

//Step 2 Add attributes/properties
newH1.textContent="I Like Pizza";
newH1.id="myH1";
newH1.style.color="tomato";
newH1.style.textAlign="center";


//step 3 Append element to DOM
//document.body.prepend(newH1);//prepend add to the element in the first. But append add to the content last

//document.getElementById("box1").append(newH1);



const box2=document.getElementById("box2");
document.body.insertBefore(newH1,box2);


//Roemove HTML element.