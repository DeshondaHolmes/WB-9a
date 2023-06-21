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
    
    getIntro() {

        let intro =
            "Hi! I'm " + this.getFullName() + " and I am a " +
            this.jobTitle;
        return intro;
    }
    getGrossPay(hoursWorked) {
      
        return this.payRate * hoursWorked
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


Deshonda = new Employee("Deshonda", "Holmes", 2, "Full stack developer", 100.50);
console.log(`Employee ${Deshonda.getFullName()} created`);
console.log(`Job title is ${Deshonda.jobTitle}`);
console.log(`Pay rate is $${Deshonda.payRate}`);


console.log(`-----------Excercise 2----below-----------`);
let Kallen = new Employee( "Kallen", "Ged",2, "Developer", 170.50);
console.log(`Employee ${Kallen.getFullName()} created`);
console.log(`Gross pay is ${Kallen.getGrossPay(2)}`);
