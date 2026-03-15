/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    const pivot = nums[mid];
    if (target < pivot) {
      end = mid - 1;
    } else if (target > pivot) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
};
// @lc code=end
