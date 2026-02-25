/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // dp 表：dp[i] 表示以元素 nums[i] 结尾的连续子数组的最大和
  // dp[i] = max{dp[i - 1] + nums[i], nums[i]}

  let prev = 0;
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    maxSum = Math.max(maxSum, prev);
  }

  return maxSum;
};
// @lc code=end

var maxSubArray = function (nums) {
  // dp 表：dp[i] 表示以元素 nums[i] 结尾的连续子数组的最大和
  // dp[i] = max{dp[i - 1] + nums[i], nums[i]}

  const dp = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }

  return Math.max(...dp);
};
