

//destructuring= exact value for array and objects, then assign them to variables in a convenient way.
    //[]=to perform array destructuring.
    


    //example 1(swap variable).

   /* let a=2;
    let b=5;
    [a,b]=[b,a];
    console.log(a);
    console.log(b);*/



    //example array element to variable.

   /* const colors=["red","green","white","blue","green"];
    const[fist,second,third,...extra]=colors;//... means rest parameter. repersent indefinite number of arguments
    console.log(fist);
    console.log(second);
    console.log(third);
    console.log(extra);*/



    //example 3(object)


    function disPlay({firstname,lastname,age,job="unemp"}){
        console.log(`name: ${firstname} ${lastname}`);
        console.log(`age: ${age}`);
        console.log(`job: ${job}`);
    

    }

    const person1={
        firstname:"shah",
        lastname:"sultan",
        age:23,
    }
    // const{firstname,lastname,age,job="unemployeed"}=person1;
    // console.log(firstname);
    // console.log(lastname);
    // console.log(age);
    // console.log(job);

    disPlay(person1);



