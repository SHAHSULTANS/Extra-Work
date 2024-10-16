






let Login=false;
let username;
let password;



while(!Login)
{
    username=window.prompt("Enter Your user name: ");
    password=window.prompt("Enter your password: ");

    if(username==="Shanto" && password==="1234")
    {
        Login=true;
        console.log("You are logged in");
    }
    else
    {
        console.log("Invalid credential! Please try again");
    }
}