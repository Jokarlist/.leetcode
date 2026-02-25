/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  // dp 表：dp[i][j] 表示行至当前 [i,j] 位置所采用的最小路径和
  // 当前位置只能从上边和左边的位置行至
  // dp[i][j] = min{dp[i - 1][j] + dp[i][j - 1]} + grid[i][j]

  if (!grid || !grid.length || !grid[0].length) return 0;

  const row = grid.length;
  const col = grid[0].length;

  // 优化空间，dp 只使用单行
  const dp = new Array(col);

  dp[0] = grid[0][0];

  // 初始化 dp
  for (let j = 1; j < col; j++) {
    dp[j] = dp[j - 1] + grid[0][j];
  }

  // 补全 dp 剩余值
  for (let i = 1; i < row; i++) {
    // 每新一行都初始化 dp 首列值
    dp[0] = dp[0] + grid[i][0];
    for (let j = 1; j < col; j++) {
      dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j];
    }
  }

  return dp[col - 1];
};
// @lc code=end

var minPathSum = function (grid) {
  // dp 表：dp[i][j] 表示行至当前 [i,j] 位置所采用的最小路径和
  // 当前位置只能从上边和左边的位置行至
  // dp[i][j] = min{dp[i - 1][j] + dp[i][j - 1]} + grid[i][j]

  if (!grid || !grid.length || !grid[0].length) return 0;

  const row = grid.length;
  const col = grid[0].length;
  const dp = Array.from({ length: row }, () => Array.from({ length: col }));

  dp[0][0] = grid[0][0];

  // 初始化 dp 首行边界
  for (let j = 1; j < col; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }

  // 初始化 dp 首列边界
  for (let i = 1; i < row; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  // 补全 dp 剩余值
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp[row - 1][col - 1];
};
