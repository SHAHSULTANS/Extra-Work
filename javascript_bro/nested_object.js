
//nested objects=objects inside of other objects. allow you to organize and structure your data hierarchical manner.

//person{address{},contactInfo{}}


/*
const person={
    fullName:"shah sultan",
    age:30,
    isStuedent:true,
    hobbies:["karate","cricket","fishing"],
    address:{
        street:"124 main ST.",
        city:"sherpur",
        country:"BD",
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.hobbies);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.country);

for(let property in person.address){
    console.log(person.address[property]);
}

*/

class Person{

    constructor(name,age,...address){
        this.name=name;
        this.age=age;
        this.address=new Address(address);
    }

}


class Address{
    constructor(street,city,country){
        this.street=street;
        this.city=city;
        this.country=country;
    }
}

const person1=new Person("shanto",23,"124 main st","sherpur","BD");
console.log(person1.name);
console.log(person1.age);
console.log(person1.address);

let ar=person1.address;
for(let x in ar){
    console.log(ar[x] );
}

