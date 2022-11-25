var obj = {
    num : 2,
    age : 1
};

function add_No(e,f,g){
    return this.age + e + f + g;
}

// CALL
console.log(add_No.call(obj,3,3,3));

// Apply
var arr = [3,3,3];
console.log(add_No.apply(obj,arr));

// Bind
console.log(add_No.bind(obj,3,3,3));
var boud = add_No.bind(obj);
console.log(boud(1,2,3));

var Student = {
    age : 20
};

var print_name = (e) => {
    return e + this.age;
}

var c = ['a','b','c'];
console.log(Student.bind(obj));