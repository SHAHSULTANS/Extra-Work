// method chaining= Calling one method after antoher in one continous line of code;


let username=window.prompt("Enter your username: ");

// username=username.trim();

// let letter=username.charAt(0);

// letter=letter.toUpperCase();

// let extrachar=username.slice(1);
//  extrachar=extrachar.toLowerCase(); 


//  username=letter+extrachar;
let le=username.length;
console.log(le);


username=username.trim().charAt(0).toUpperCase()+username.trim().slice(1).toLowerCase();               

 console.log(username);
