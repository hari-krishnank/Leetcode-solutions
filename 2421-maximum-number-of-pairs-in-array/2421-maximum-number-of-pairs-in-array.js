/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++
                nums.splice(j, 1)
                nums.splice(i, 1)
                i--
            }
        }
    }
    return [count,nums.length]
};