/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = new Map();
    for(var i = 0; i < nums.length; i++){
        var currentNum = nums[i];

        var complement = target - currentNum;
        if(hash.has(complement)){
            return [hash.get(complement), i];
        }

        hash.set(currentNum, i);
    }

    return [];
};