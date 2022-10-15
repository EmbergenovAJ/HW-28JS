// task 1
// function sumTo(n){
//     // let res = 0;
//     // for (let i = 0; i <=n; i++) {
//     //     res += i;
//     // }
//     // return res;
//
//     // return n/2*(n+1)
//
//     if (n === 1) return 1;
//     return n + sumTo(n - 1);
// }
//
// console.log(sumTo(100))

//task 4
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList( list ) {
    // while (list){
    //     console.log(list.value);
    //     list = list.next;
    // }

    console.log(list.value);
    if (list.next) {
        printList(list.next);
    }
}

printList(list);