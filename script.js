//task 1
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
};

function sumSalaries( obj ) {
    if (Object.keys( obj )[0] === undefined) return 0;
    let summ = 0;
    for (let value of Object.values( obj )){
        summ += value;
    }
    return summ;
}
console.log ( sumSalaries(salaries) );