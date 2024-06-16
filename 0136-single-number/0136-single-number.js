/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {

    for (let i = 0; i < nums.length; i++) {
        let foundDuplicate = false;
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] === nums[j]) {
                foundDuplicate = true;
                break;
            }
        }
        if (!foundDuplicate) {
            return nums[i];
        }
    }
    
};