/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;
  while (start !== end) {
    const sum = numbers[start] + numbers[end];
    if (target === sum) {
      break;
    } else if (target > sum) {
      start++;
    } else {
      end--;
    }
  }

  return [start + 1, end + 1];
};
// @lc code=end
