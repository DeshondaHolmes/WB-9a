"use strict";



class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;

    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    promote(newJobTitle, newPayRate) {
        this.jobTitle = newJobTitle;
        this.payRate = newPayRate;

    } getIntro() {

        let intro =
            "Hi! I'm " + this.getFullName() + " and I am a " +
            this.jobTitle;
        return intro;



    }

}

console.log(`-----------demo-------------`);
let e1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.50)

console.log(e1.getIntro());

e1.promote("Senior Graphic Artist", 75);

console.log(e1.getIntro());

console.log(`-----------Exercise 1 below--------------`);
let employee1 = new Employee(
    1, "Ian", "Auston", "Graphic Artist", 42.50);
console.log(`Employee ${employee1.firstName} created`);

console.log(`-----------Excercise 1 ----below-----------`);


console.log(`Employee ${employee1.getFullName()} created`);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);

console.log(`-----------Excercise 1 test----below-----------`);

let employee2 = new Employee(2, "Deshonda", "Holmes", "Full stack developer", 100.50);
console.log(`Employee ${employee2.getFullName()} created`);
console.log(`Job title is ${employee2.jobTitle}`);
console.log(`Pay rate is $${employee2.payRate}`);

console.log(`-----------Excercise 2 ----below-----------`);

employee1.promote("Sr. Graphic Artist", 46.75);

console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);
console.log(`-----------Excercise 2 test----below-----------`);

employee2.promote("Sr. Full stack developer", 146.75);

console.log(`Job title is ${employee2.jobTitle}`);
console.log(`Pay rate is $${employee2.payRate}`);


console.log(`-----------Excercise 3----below-----------`);


console.log(employee1.getIntro());
employee1.promote("Sr. Graphic Artist", 46.75);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);

console.log(`-----------Excercise 3-test---below-----------`);


console.log(employee2.getIntro());
employee2.promote("Sr. Full stack developer", 146.75);
console.log(`Job title is ${employee2.jobTitle}`);
console.log(`Pay rate is $${employee2.payRate}`);