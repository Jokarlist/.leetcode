/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1;
    let end = n;
    let ver = null;
    while (start < end) {
      ver = start + Math.floor((end - start) / 2);
      // 搜索范围左移
      if (isBadVersion(ver)) {
        end = ver;
      }
      // 搜索范围右移
      else {
        start = ver + 1;
      }
    }

    return start;
  };
};
// @lc code=end
