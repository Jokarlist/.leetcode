/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  /**
   * dp 表：dp[i][j] 表示 s 前 i 个字符和 p 的前 j 个字符是否能匹配
   * 当下面任一条件为 true 时，dp[i][j] = true
   * p[j - 1] = "*" 时
   * 1. dp[i][j - 2]：即 p[j - 2]p[j - 1] 即 p[j - 2]* 匹配 0 次；
   * 2. dp[i - 1][j] 且 s[i - 1] = p[j - 2]：即 p[j - 2] 匹配多 s[i - 1] 这一次；
   * 3. dp[i - 1][j] 且 p[j - 2] = "."：即 p[j - 2] 匹配任意的 s[i - 1]；
   * p[j - 1] != "*" 时
   * 1. dp[i - 1][j - 1] 且 s[i - 1] = p[j - 1]：即 p[j - 1] 匹配 s[i - 1]；
   * 2. dp[i - 1][j - 1] 且 p[j - 1] = "."：即 p[j - 1] 匹配任意 s[i - 1]；
   */

  const row = s.length + 1;
  const col = p.length + 1;
  const dp = Array.from({ length: row }, () => new Array(col));

  dp[0][0] = true; // s 和 p 都为空串时可匹配

  // 初始化 dp 首行
  for (let j = 2; j < col; j += 2) {
    dp[0][j] = dp[0][j - 2] && p[j - 1] === "*";
  }

  // 状态转移
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (p[j - 1] === "*") {
        dp[i][j] = Boolean(
          dp[i][j - 2] ||
          (dp[i - 1][j] && s[i - 1] === p[j - 2]) ||
          (dp[i - 1][j] && p[j - 2] === ".")
        );
      } else {
        dp[i][j] = Boolean(
          dp[i - 1][j - 1] && (s[i - 1] === p[j - 1] || p[j - 1] === ".")
        );
      }
    }
  }

  return dp[row - 1][col - 1];
};
// @lc code=end
