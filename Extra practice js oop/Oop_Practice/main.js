/*
// Normal Object
let app ={
    Android:"https:// download_link for andorid",
    IOS:"https:// download_link for ios",
    Windows:"https:// download_link for windows",
    Linux:"https:// download_link for linux"
}
console.log(app.Android)

let person ={
    firstName: 'Jon',
    lastName:'Doe',
    age:30,
    phone:'+8801743050643',
    getFullInformation(){
return(`This person Full Name Is ${this.firstName} ${this.lastName} and Age is ${this.age}. This person phone number is ${this.phone}`);
    }
}
console.log(person.firstName)
console.log(person.getFullInformation())
//By creating instance of Object

var person = new Object();
person.firstName = 'Ashraful';
person.lastName = 'Islam';
person.getName =()=>{
    return (`${person.firstName} ${person.lastName}`)
}


console.log(person.firstName)
console.log(person.getName())

//By using an Object constructor
 function person(){
    this.firstName='Ashraful';
    this.lastaName = 'Islam';
    this.getName= function(){
        return(`${this.firstName} ${this.lastaName}`)
    }
 }
 let person1 = new person();
 console.log(person1.getName())

 

 // Class  
  class person {
    firstName = 'Ashraful';
    lastName = 'Islam';
    getName(){
        return(`this person Full Name is ${this.firstName} ${this.lastName}`)
    }
  }
  let person1 = new person()
  console.log(person1.getName())

  //Re-declaring Class

  var person = class{
    firstName = 'Ashraful';
    lastName = 'Islam';
    getName(){
        return(`this person Full Name is ${this.firstName} ${this.lastName}`)
    }
  }
  
  let person1 = new person()
  console.log(person1.getName())
//   Re-declaring

  var person = class{
    firstName = 'Ashraful';
    lastName = 'Islam';
    getName(){
        return(`this person Full Name is ${this.firstName} ${this.lastName}`)
    }
  }
  
  let person2 = new person()
  console.log(person2.getName())

//   Constructor on Class
*/
class person{
    constructor(){
        console.log("I am constructor")
    }
}

const person1 = new person();


// Constructor Parameter
class message{
    constructor(msg){
        console.log(msg)
    }
}
const newmessage = new message("I am new constructor ")
// Change class properties value using constructor

var person2=class{
    firstName = 'Jon';
    lastName = 'Doe';

    constructor(name1,name2){
        this.firstName=name1;
        this.lastName=name2;
    }
    getName(){
        return(`this person name is ${this.firstName} ${this.lastName}`)
    }
}

let person3 =new person2("Kamal","Khan");
let person4 =new person2("Jamal","Khan");
console.log(person3.getName())
console.log(person4.getName())

// Normal Class and Change class properties value using constructor

class personName {
    firstName = 'Jon';
    lastName = 'Doe';

    constructor(name1,name2){
        this.firstName=name1;
        this.lastName=name2;
    }
    getName(){
        return(`this person name is ${this.firstName} ${this.lastName}`)
    }
}

let person5 =new personName("Jon","Khan");
let person6 =new personName("Doe","Khan");
console.log(person5.getName())
console.log(person6.getName())






  


