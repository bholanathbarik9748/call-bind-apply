"use strict";

// Function
// var getA = function(params) {
//     return params;
// }

// Fat Arrow
let getA = a => a;

console.log(getA(1));

// Ex 2
let square_of_a_no = (params) => {
    return params * params
};
console.log(square_of_a_no(4));


var x = function () {
    var that = this;
    this.val = 1;
    setTimeout(function () {
        that.val++;
        console.log(that.val);
    }, 1);
}
var XX = new x();

var y = function () {
    this.val = 1;
    setTimeout(() => {
        this.val++;
        console.log(this.val);
    }, 1);
}

var yy = new y();

var z = (arr) => {
    console.log(arguments[0]);
}
z(1, 2, 3);


// Assignment
class Student {
    constructor(name, age, phone_no, marks) {
        this.name = name;
        this.age = age;
        this.phone_no = phone_no;
        this.marks = marks;
    }

    static count_Student(){
        return (Student.count++);
    }

    eligible(){
        if(this.marks >= 40){
            console.log(`${this.name} age ${this.age} is eligible`);
        }else if(this.marks < 40){
            console.log(`${this.name} age ${this.age} is not eligible . better luck next Time`);
        }
    }
}

let s1 = new Student("naruto", 14,12344,98);
let s2 = new Student("luffy", 15,42344,40);
let s3 = new Student("goku", 16,42344,30);
let s4 = new Student("asta", 17,42344,60);
let s5 = new Student("L", 18,42344,54);
s1.eligible();
s2.eligible();
s3.eligible();
s4.eligible();
s5.eligible();