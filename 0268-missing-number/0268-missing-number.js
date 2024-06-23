/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length
    let expectedSum = (n*(n+1))/2
    let actualSum = nums.reduce((curr,acc)=>curr+acc , 0)
    let result = expectedSum - actualSum
    return result
};