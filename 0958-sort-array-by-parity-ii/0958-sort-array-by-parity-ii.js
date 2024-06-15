/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let even = 0
    let odd =1 
    let arr =[]

    nums.forEach(num =>{
        if(num%2 === 0){
            arr[even] = num
            even = even+2
        }
        else{
            arr[odd] = num
            odd = odd+2
        }
    })
    return arr
};