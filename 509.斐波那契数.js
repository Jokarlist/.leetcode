/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 2) return n;

  let prev1 = 0;
  let prev2 = 0;
  let cur = 1;
  while (n >= 2) {
    prev1 = prev2;
    prev2 = cur;
    cur = prev1 + prev2;
    n--;
  }

  return cur;
};
// @lc code=end
