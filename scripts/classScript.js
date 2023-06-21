"use strict";


class Person {
    constructor(firstName, lastName) {

        this.firstName = firstName;
        this.lastName = lastName;


    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, id, jobTitle, payRate) {
        super(firstName, lastName)
        this.employeeId = id;
        this.jobTitle = jobTitle;
        this.payRate = payRate;

    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    getIntro() {

        let intro =
            "Hi! I'm " + this.getFullName() + " and I am a " +
            this.jobTitle;
        return intro;
    }
    getGrossPay(hoursWorked) {
         grossPay = this.payRate * hoursWorked

        return grossPay
    }

}

console.log(`-----------Excercise 1----below-----------`);

let Deshonda = new Person("Deshonda", "Holmes");
console.log(Deshonda.getFullName());

let Karla = new Person("Karla", "Red");
console.log(Karla.getFullName());


console.log(`-----------Excercise 2 ----below-----------`);

let Kelly = new Employee(1, "Kelly", "Red", "Developer", 170.50);
console.log(`Employee ${Kelly.getFullName()} created`);
console.log(`Job title is ${Kelly.jobTitle}`);
console.log(`Pay rate is $${Kelly.payRate}`);

console.log(`-----------Excercise 2 test ----below-----------`);

Deshonda = new Employee(2, "Deshonda", "Holmes", "Full stack developer", 100.50);
console.log(`Employee ${Deshonda.getFullName()} created`);
console.log(`Job title is ${Deshonda.jobTitle}`);
console.log(`Pay rate is $${Deshonda.payRate}`);


let Kallen = new Employee(3, "Kallen", "Ged", "Developer", 170.50);
console.log(`Employee ${Kallen.getFullName()} created`);
console.log(`Gross pay is ${Kallen.getGrossPay}`);
