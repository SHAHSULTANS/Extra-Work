


function generatePassword(length,includeLowercase,includeUppercase,includeNumber,includeSymbol){

    const lowercase="abcdefghijklmnopqrstuvwxyz";
    const uppercase=lowercase.toUpperCase();
    // console.log(uppercase);
    const numberChars="0123456789";
    const symbolChars="!@#$%^&*()_+";


    let allowedChars="";
    let Pass="";


    allowedChars+=includeLowercase?lowercase:"";
    allowedChars+=includeUppercase?uppercase:"";
    allowedChars+=includeNumber?numberChars:"";
    allowedChars+=includeSymbol?symbolChars:"0";

    // console.log(allowedChars);
    if(length<=0)
    {
        return `Password length must be at least one`;
    }
    if(allowedChars.length===0)
    {
        return `At least 1 set of character needs to be selected`;
    }

    for(let i=0;i<length;i++)
    {
        const index=Math.floor(Math.random()*allowedChars.length);
        Pass+=allowedChars[index];

    }



    return Pass;
}

const passwordLength=12;
const includeLowercase=true;
const includeUppercase=true;
const includeNumber=true;
const includeSymbol=true;

const Password=generatePassword(passwordLength,
                                includeLowercase,
                                includeUppercase,
                                includeNumber,
                                includeSymbol);
    
console.log(`Generated password: ${Password}`);