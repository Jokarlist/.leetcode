/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // dp 表：dp[i] 表示以第 i 个数结尾的子序列的最大长度
  // dp[i] = max(dp[j]) + 1, 其中 0 <= j < i 且 num[j] < num[i]

  const dp = [1];
  let maxLen = 1;
  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1;
    // 保证是子序列
    for (let j = 0; j < i; j++) {
      // 保证是严格递增
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    maxLen = Math.max(maxLen, dp[i]);
  }

  return maxLen;
};
// @lc code=end
