//task 1
// let date = new Date(2012,2,20,3,12,0,0)
// console.log(date);

//task 6
function getSecondsToday () {
    let date = new Date();
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

console.log(getSecondsToday());