/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++){
        var hash = new Map();

        var currentNum = nums[i];

        var complement = currentNum - target;
        if(hash.has(complement)){
            return [hash.get(complement), i];
        }

        hash.set(complement, i);
    }

    return [];
};