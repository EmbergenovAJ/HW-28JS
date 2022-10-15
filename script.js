//task 1
let user = {
    name: "Василий Иванович",
    age: 35
};

let a = JSON.parse( JSON.stringify(user) );
console.log(a);
console.log(JSON.stringify(user))