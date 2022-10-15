//task 1
// let user = {
//     name: "John",
//     years: 30,
// };
// let {name, years, isAdmin = false} = user;
// console.log(name);
// console.log(years);
// console.log(isAdmin);


//task 2 from 5.10
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary( obj ) {
    let arr = ['Din', 0];
    for (let [key, value] of Object.entries( obj )){
        if (arr[1] <  value) arr = [key, value];
    }
    return arr[0];
}

console.log(topSalary(salaries));