




class User{
    static userCount=0;

    constructor(name){
        this.name=name;
        User.userCount++;// we can't use this keyword.
    }
}

const user1=new User("Shanto");
const user2=new User("Shah sultan");

console.log(User.userCount);