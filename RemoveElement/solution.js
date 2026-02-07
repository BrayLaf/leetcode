/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let numsLeng = nums.length;
    let rmvCount = 0;
    let pointer = numsLeng - 1;
    for(let i = 0; i < numsLeng; i++){
        if(nums[i] === val){
            while(nums[pointer] === val)
                pointer--;
            let num = nums[i];
            let pointVal = nums[pointer];
            nums[i] = pointVal;
            nums[pointer] = num;
            rmvCount++;
            pointer--;
        }
    }
    let k = numsLeng - rmvCount;
    return k;
};


