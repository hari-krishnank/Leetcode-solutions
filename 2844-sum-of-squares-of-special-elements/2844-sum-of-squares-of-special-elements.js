/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums) {
    let res = []
    for (i = 1; i <= nums.length; i++) {
        if (nums.length % i == 0) {
            res.push(nums[i - 1] * nums[i - 1])
        }
    }
    return res.reduce((acc, curr) => {
        return acc += curr
    }, 0)

};