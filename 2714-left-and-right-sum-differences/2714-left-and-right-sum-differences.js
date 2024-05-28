/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    let leftSum = 0
    let rightSum = 0
    let ans = []
    for (let i = 0; i < nums.length; i++) {
        rightSum = rightSum + nums[i]
    }

    for (let i = 0; i < nums.length; i++) {
        rightSum = rightSum - nums[i]
        ans[i] = Math.abs(leftSum - rightSum)
        leftSum = leftSum + nums[i]
    }

    return ans

};