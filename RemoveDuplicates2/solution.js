/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 2;

    for(let r = 2; r < nums.length; r++) {
        if(nums[r] !== nums[k - 2]){
            nums[k++] = nums[r];
        }
    }
    return k;
};