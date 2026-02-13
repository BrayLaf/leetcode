/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let candidate = null;
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    return candidate;
};

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var majorityElement = function(nums) {
//     let count = 0;
//     let hashMap = new Map();
//     for (let num of nums) {
//         if (hashMap.has(num)) {
//             hashMap.set(num, hashMap.get(num) + 1);
//         } else {
//             hashMap.set(num, 1);
//         }
//     }
//     return [...hashMap.entries()].reduce((max, entry) => {
//         return entry[1] > max[1] ? entry : max;
//     })[0];
// };