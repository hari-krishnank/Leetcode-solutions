/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let count = {}
    let res = []

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (count[num]) {
            count[num]++
        } else {
            count[num] = 1
        }
    }

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (count[num] === 1) {
            res.push(num)
        }
    }
    console.log(res)

    let sum = res.reduce((curr, acc) => curr + acc, 0)
    console.log(sum)
    return sum
};