/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
    let arr = []
    let arr1 = []
    let res = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            arr.push(nums[i] * -1)
        } else {
            arr1.push(nums[i])
        }
    }
    console.log(arr)
    console.log(arr1)
    for (let i = 0; i < arr.length; i++) {
        if (arr1.includes(arr[i])) {
            console.log(arr[i])
            res.push(arr[i])
        }
    }

    console.log('res', res)
    if (res.length) {
        return res.reduce((curr, acc) => {
            return curr > acc ? curr : acc
        },0)
    } 
    return  -1
};