/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.trim();
  let result = "";
  let end = s.length - 1;
  let start = end;
  while (start >= 0) {
    while (start >= 0 && s[start] !== " ") start--; // 搜索首个空格
    result += s.slice(start + 1, end + 1) + " "; // 添加单词
    while (start >= 0 && s[start] === " ") start--; // 跳过单词间空格
    end = start; // end 指向下个单词的尾
  }

  return result.trimEnd();
};
// @lc code=end

var reverseWords = function (s) {
  s = s.replaceAll(/^\s+|\s+$/g, "").replaceAll(/\s+/g, " ");
  let result = "";
  let end = s.length - 1;
  let start = end;
  while (start >= -1) {
    start--;
    if (s[start] === " " || start === -1) {
      for (let i = start + 1; i <= end; i++) {
        result = result + s[i];
      }

      end = start - 1;
      if (start >= 0) {
        result += " ";
      }
    }
  }

  return result;
};
