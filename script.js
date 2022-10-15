//task 1
// let date = new Date(2012,2,20,3,12,0,0)
// console.log(date);

//task 4
let date = new Date(2015, 0, 2);
function getDateAgo(date, days) {
    let a = +date - (days * 24 * 3600 * 1000);
    return new Date(a);
}
console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)