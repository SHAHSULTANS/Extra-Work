//DOM= Document Object Model.
//   Object{} that represents the page you see in the browser
//   and provides you with an API to interact with it.
//   Web browser constructs the DOM when it loads an HTML dcoument and structure all the element in a tree-like representation.

//JavaScript can access the DOM to dynamically changes the context the content, structure, and style of a web page.


const username="";
const welocmeMSG=document.getElementById("welcome-msg");
welocmeMSG.textContent +=username===""?'Guest':username;



// console.dir(document);