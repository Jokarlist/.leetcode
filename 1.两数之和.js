/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }

    map.set(nums[i], i);
  }

  return [0];
};
// @lc code=end

var twoSum = function (nums, target) {
  const idxMap = {};
  for (let i = 0; i < nums.length; i++) {
    idxMap[nums[i]] = i;
  }

  let diff = null;
  for (let i = 0; i < nums.length; i++) {
    diff = target - nums[i];
    if (idxMap[diff] !== i && idxMap[diff] !== undefined) {
      return [i, idxMap[diff]];
    }
  }

  return [];
};
