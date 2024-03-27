class persion {
    constructor(firstName,lastName,email,Phone){
    this.firstName=firstName; 
    this.lastName =lastName;
    this.email= email;
    this.Phone = Phone;

    }
    fullName (){
        return `${this.firstName} ${this.lastName}`
    }
    greet(){
        return `Wellcome to ${this.fullName()}`
    }
};
const persion1 =new persion('jon','Hakim','jon@hakim.com','07143050643');
// console.log(persion1);
console.log(persion1.firstName);
console.log(persion1.lastName);
console.log(persion1.greet());