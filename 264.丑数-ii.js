/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  // dp 表：dp[i] 表示第 i 个丑数
  // dp[i] = max{dp[p2] * 2, dp[p3] * 3, dp[p5] * 5}, when 2 <= i < n

  const dp = [0, 1];
  let p2 = 1;
  let p3 = 1;
  let p5 = 1;
  for (let i = 2; i <= n; i++) {
    const num2 = dp[p2] * 2;
    const num3 = dp[p3] * 3;
    const num5 = dp[p5] * 5;

    dp[i] = Math.min(num2, num3, num5);

    dp[i] === num2 && p2++;
    dp[i] === num3 && p3++;
    dp[i] === num5 && p5++;
  }

  return dp[n];
};
// @lc code=end
