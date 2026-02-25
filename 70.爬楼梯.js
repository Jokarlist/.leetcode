/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // dp 表定义：爬前 n 阶楼梯对应的方法数
  // dp[n] = dp[n - 2] + dp[n - 1]

  let prev1 = 0;
  let prev2 = 0;
  let cur = 1;
  for (let i = 1; i <= n; i++) {
    prev1 = prev2;
    prev2 = cur;
    cur = prev1 + prev2;
  }

  return cur;
};
// @lc code=end
