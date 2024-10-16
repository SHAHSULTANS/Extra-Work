
// function=A section of resusable code declare code once, use it whenever you need

//call the function to execute that code.


function add(a,b)
{
    return(a+b);
}

function IsValid(email)
{
    if(email.includes("@"))
    {
        return true;
    }
    else
    {
        return false;
    }
}

let ans=add(3,2);
console.log(ans);

let c=IsValid("sul@gmail.com");
console.log(c);