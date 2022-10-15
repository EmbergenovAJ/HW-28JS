// task 1
function sumTo(n){
    // let res = 0;
    // for (let i = 0; i <=n; i++) {
    //     res += i;
    // }
    // return res;

    // return n/2*(n+1)

    if (n === 1) return 1;
    return n + sumTo(n - 1);
}

console.log(sumTo(100))