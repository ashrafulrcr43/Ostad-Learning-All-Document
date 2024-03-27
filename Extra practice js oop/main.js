const person = {
    firstName : 'jon',
    lastName: 'Thon',
    age:32,
    phone: '01743050643',
    fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    fullInformation(){
        return `${this.fullName()} ${this.age} ${this.phone}`
    }


};
console.log(person.firstName)
console.log(person.fullName())
console.log(person.fullInformation())