/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
   let merged = new Array(m + n)
   for(let i = 0; i < m; ++i){
        merged[i] = nums1[i];
   }
   for(let j = 0; j < n; ++j){
        merged[m + j] = nums2[j];
   }

   merged.sort((a, b) => a - b);

   for(let i = 0; i < m; ++i){
        nums1[i] = merged[i];
   }
   for(let j = 0; j < n; ++j){
        nums1[m + j] = merged[m + j]
   }
};



