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

function printList(list) {
    // if (list.next) printList(list.next);
    // console.log( list.value );
    let a = []
    while (list){
        a.push(list.value);
        list = list.next
    }
    for (let i = a.length - 1; i >= 0; i-- ){
        console.log(a[i]);
    }
}

printList(list);