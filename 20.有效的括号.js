/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const dict = {
    "(": true,
    "[": true,
    "{": true,
    ")": "(",
    "]": "[",
    "}": "{"
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const tail = stack[stack.length - 1];
    if (dict[char] === tail) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return !stack.length;
};
// @lc code=end
