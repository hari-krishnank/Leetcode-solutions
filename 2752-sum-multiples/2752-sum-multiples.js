/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
            arr.push(i)
        }
    }
    console.log(arr)
    let sum = arr.reduce((curr, acc) => {
        return curr + acc
    },0)
    console.log('sum',sum)
    return sum
};