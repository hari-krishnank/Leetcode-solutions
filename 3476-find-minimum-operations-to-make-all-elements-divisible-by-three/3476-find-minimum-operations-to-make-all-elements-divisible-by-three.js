/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        let remainder = nums[i] % 3
        if (remainder !== 0) {
            let res = Math.min(remainder, 3 - remainder)
            count += res
        }
    }
    console.log('count', count)
    return count
};