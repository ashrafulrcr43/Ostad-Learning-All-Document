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
*/
//🟪 By creating instance of Object
let person = new Object();
person.firstName = 'Ashraful';
person.lastName = 'Islam';
person.getName =()=>{
    return(`This person Name is ${person.getName()}`);
}
console.log(person.getName())