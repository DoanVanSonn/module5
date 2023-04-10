// // happy coding 👻
// console.log("hello world");
// // happy coding 👻
// console.log("hello world");
// function fibonacci(n) {
//     var arr = [1, 1];
//     for (var i = 2; i < n - 2; i++) {
//         arr.push(arr[i - 1] + arr[i - 2]);
//     }
//     return arr;
// }
// function calculateSum(arr) {
//     var sum = 0;
//     var n;
//     for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
//         n = arr_1[_i];
//         sum += n;
//     }
//     return sum;
// }
// var quantity = 10;
// var arr = fibonacci(quantity);
// var sum = calculateSum(arr);
// console.log(arr);
// console.log(sum);
let x = 0;
async function r5() {
    x += 1;
    console.log(x);
    return 5;
}
(async () => {
    x += await r5();
    console.log(x);
})();