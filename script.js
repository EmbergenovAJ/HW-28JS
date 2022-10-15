//task 1
// let date = new Date(2012,2,20,3,12,0,0)
// console.log(date);

//task 5
function getLastDayOfMonth(year, month) {
    let vis = ( (year % 4 === 0 || year % 400 === 0) && year % 100 !== 0) ? true : false;
    if ( [0,2,4,6,7,9,11].includes(month) ) return 31;
    if ( [3,5,8,10].includes(month) ) return 30
    if ( month === 1 && vis) return 29;
    else return 28;
}

console.log(getLastDayOfMonth(2012, 1));