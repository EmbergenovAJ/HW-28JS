//task 1
// let date = new Date(2012,2,20,3,12,0,0)
// console.log(date);

//task 2
let date = new Date(2012, 0, 3);

function getWeekDay( date ) {
    let a = date.getDay();
    switch (a){
        case 0: return 'ВС'
        case 1: return 'ПН'
        case 2: return 'ВТ'
        case 3: return 'СР'
        case 4: return 'ЧТ'
        case 5: return 'ПТ'
        case 6: return 'СБ'
    }
}

console.log( getWeekDay(date) );