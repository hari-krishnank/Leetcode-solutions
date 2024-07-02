/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1 = nums1.sort((a,b)=> a-b)
    nums2 = nums2.sort((a,b)=>a-b)

    let arr =[]
    for(let i=0; i<nums1.length; i++){
        for(let j=0; j<nums2.length; j++){
            if(nums1[i] === nums2[j]){
                nums2[j]= -9999;
                arr.push(nums1[i])
                break;
            }
        }
    }
    return arr
};