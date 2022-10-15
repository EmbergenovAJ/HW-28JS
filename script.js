//task 1
// let date = new Date(2012,2,20,3,12,0,0)
// console.log(date);

//task 3
let date = new Date(2012, 0, 3);
function getLocalDay( date ){
    let day = date.getDay();
    if (day === 0) return 7;
    return day;
}
console.log( getLocalDay(date) );