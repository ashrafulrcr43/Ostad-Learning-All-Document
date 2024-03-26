const person = {
    firstName : 'Jon',
    lastName: 'Than',
    email:'jon@email.com',
    fullName:function(){
        // return `this.firstName+ '' + this.lastName`;
        return `${this.firstName} ${this.lastName}`;
    },
    //Another way function call
    greet(){
        return `wellcome ${this.fullName()}`;
    },
    person:sayHi =function(){
        return "Hi"
    }
}

console.log(person.fullName())
console.log(person.greet())
console.log(sayHi())




