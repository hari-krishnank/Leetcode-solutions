/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
    let avg = []
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length / 2; i++) {
        let value = (nums[i] + nums[nums.length - i - 1]) / 2;
        avg.push(value);
    }
    return Math.min(...avg);
};