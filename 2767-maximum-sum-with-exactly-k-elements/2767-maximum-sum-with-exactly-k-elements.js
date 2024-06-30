/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
    let newArray = nums.sort((a, b) => a - b)

    let max = newArray.reduce((curr, acc) => {
        return curr > acc ? curr : acc
    })

    let sum = 0
    for (let i = 0; i < k; i++) {
        sum += max
        console.log('sum', sum)
        max = max + 1
        console.log(max)

    }
    console.log(sum)
    return sum
};