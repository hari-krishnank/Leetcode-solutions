/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    let arr = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            arr.add(nums[i])
        }
    }
    console.log(arr.size)
    return arr.size
};