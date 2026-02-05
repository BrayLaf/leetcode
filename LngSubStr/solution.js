/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var maxLength = 0;
    var start = 0;
    const lastIndex = new Array(128).fill(-1);
    for(var end = 0; end < s.length; end++){
        start = Math.max(start, lastIndex[s.charCodeAt(end)] + 1);
        maxLength = Math.max(maxLength, end - start + 1);

        lastIndex[s.charCodeAt(end)] = end;
    }
    return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring(""));


