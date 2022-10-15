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

//task 3
function fib(n) {
    // if (n <= 1) return n;
    // return fib(n - 1) + fib(n - 2);
    //черезе рекурсию fin(77) никогда за доли секунды не сработат


    let number1 = 1;
    let number2 = 1;
    let result = number1 + number2; //2
    for ( let i = 4; i <= n; i++){
        number1 = number2;
        number2 = result;
        result = number1 + number2;
    }
    return result;
}

console.log(fib(77))