/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
   let sort= nums.sort((a,b)=>a-b)
    for(let i=0;i<sort.length-1; i++){
        if(nums[i]==nums[i+1]){
            return true;
            // console.log(true)
        } 
    }
     return false
            // console.log(false)
};
