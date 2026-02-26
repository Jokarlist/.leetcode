/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // dp 表：dp[i] 表示前 i 个房屋能偷窃到的最高金额
  // dp[i] = max{dp[i - 2] + nums[i], dp[i - 1]}

  const len = nums.length;
  if (len <= 1) {
    return nums[0];
  }

  // 优化空间，使用滑动数组替代 dp 表
  let prev1 = nums[0]; // dp[i - 2]
  let prev2 = Math.max(nums[0], nums[1]); // dp[i - 1]
  for (let i = 2; i < len; i++) {
    const temp = prev2;
    prev2 = Math.max(prev1 + nums[i], prev2); // dp[i]
    prev1 = temp;
  }

  return prev2;
};
// @lc code=end

var rob = function (nums) {
  // dp 表：dp[i] 表示前 i 个房屋能偷窃到的最高金额
  // dp[i] = max{dp[i - 2] + nums[i], dp[i - 1]}

  const len = nums.length;
  if (len <= 1) {
    return nums[0];
  }

  const dp = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }

  return dp[len - 1];
};
