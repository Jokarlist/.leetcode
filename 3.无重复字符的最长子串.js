/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let end = -1;
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    if (i > 0) {
      set.delete(s[i - 1]);
    }

    while (end + 1 < s.length && !set.has(s[end + 1])) {
      set.add(s[end + 1]);
      end++;
    }

    maxLen = Math.max(maxLen, end - i + 1);
  }

  return maxLen;
};
// @lc code=end

var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length;
  }

  const set = new Set();
  let maxLen = 0;
  for (let i = 0; i < s.length - 1; i++) {
    let len = 1;
    set.add(s[i]);
    for (let j = i + 1; j < s.length; j++) {
      if (!set.has(s[j])) {
        set.add(s[j]);
        len++;
      } else {
        break;
      }
    }

    maxLen = Math.max(maxLen, len);
    set.clear();
  }

  return maxLen;
};
