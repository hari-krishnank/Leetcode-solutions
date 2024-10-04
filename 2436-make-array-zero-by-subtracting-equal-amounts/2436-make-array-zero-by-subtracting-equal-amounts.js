/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let s = new Set(nums)
    console.log(s)
    let res = s.has(0) ? s.size - 1 : s.size;
    console.log(res)
    return res
};