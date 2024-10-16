const P = 3.14159;
// P=42;
let radius,circumference;

    document.getElementById("mySubmit").onclick= function () {
        radius=document.getElementById("myText").value;
        radius=parseFloat(radius);
        radius=2*P*radius;
        document.getElementById("myH3").textContent=radius+" cm";
        // console.log(radius);
        // console.log(typeof(radius));
    }
    
