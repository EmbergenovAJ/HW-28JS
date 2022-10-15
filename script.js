//task 1
// let date = new Date(2012,2,20,3,12,0,0)
// console.log(date);

//task 7
function getSecondsToTomorrow(){
    let date = new Date();
    let tomorrow = new Date(+date + 24*3600*1000);
    tomorrow.setHours(0, 0, 0,0)
    console.log(date)
    console.log(tomorrow)
    return Math.round((+tomorrow - +date)/1000 )
}

console.log( getSecondsToTomorrow() );