/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const pivot = nums[Math.floor(Math.random() * nums.length)];
  const small = [];
  const equal = [];
  const great = [];
  for (const num of nums) {
    if (num < pivot) {
      small.push(num);
    } else if (num > pivot) {
      great.push(num);
    } else {
      equal.push(num);
    }
  }

  // 第 k 大的数在 great 组里
  if (k <= great.length) {
    return findKthLargest(great, k);
  }
  // 第 k 大的数在 small 组里
  else if (k > great.length + equal.length) {
    return findKthLargest(small, k - (nums.length - small.length));
  }
  // 第 k 大的数在 equal 组里
  else {
    return pivot;
  }
};
// @lc code=end
