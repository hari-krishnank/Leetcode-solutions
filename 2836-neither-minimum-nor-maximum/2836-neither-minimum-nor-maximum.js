/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
    if (nums.length <= 2) {
        return -1
    }
    nums.sort((a, b) => a - b)
    console.log(nums)
    let min = Math.min(...nums)
    let max = Math.max(...nums)
    console.log(min)
    console.log(max)

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > min && nums[i] < max) {
            return nums[i]
        }
    }
};