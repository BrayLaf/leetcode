/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length;
    if (n === 0) {
        return;
    }

    k = k % n;
    if (k === 0) {
        return;
    }
    let count = 0;
    for (let start = 0; count < n; start++) {
        let currentIndex = start;
        let currentValue = nums[start];

        do {
            const nextIndex = (currentIndex + k) % n;
            const nextValue = nums[nextIndex];
            nums[nextIndex] = currentValue;
            currentValue = nextValue;
            currentIndex = nextIndex;
            count++;
        } while (start !== currentIndex);
    }
};