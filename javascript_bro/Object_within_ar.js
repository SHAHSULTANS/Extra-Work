


var students=[{name:"shanto",age:29,grade:"A"},
              {name:"Shah sultan",age:24,grade:"B"},
              {name:"sultan",age:28,grade:"A"}];


//console.log(students.length);

//push
//students.push({name:"David",age:30,grade:"A"});

//pop remove last objects.
//students.pop();


//pop by splice method. it remove certain rage.
students.splice(1,1 );

for(var i=0;i<students.length;i++)
{
    //console.log(`name: ${students[i].name}   age: ${students[i].age}  grade:${students[i].grade}`);
}


//--------------map()------------------
const stName=students.map(student=>student.name);
//console.log(stName);



//---------fileter()--------------
const stGradeA=students.filter(function(student){
    return student.grade=="A";
});


// const stGradeA=students.filter(student=>student.grade=="A");
//console.log(stGradeA);




//------------reduce----------------
const maxage=students.reduce((max,student)=>
                           student.age>max.age?student:max );

console.log(maxage);
console.log(maxage.age);