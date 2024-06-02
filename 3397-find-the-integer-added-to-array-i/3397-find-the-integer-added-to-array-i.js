/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function (nums1, nums2) {
    nums1.sort((a, b) => a - b)
    console.log(nums1)
    nums2.sort((a, b) => a - b)
    console.log(nums2)

    let diff = 0
    for (let i = 0; i < nums1.length; i++) {
        diff = nums2[i] - nums1[i]
    }
    console.log(diff)
    return diff
};