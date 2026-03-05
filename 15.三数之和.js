/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (!nums || nums.length < 3) {
    return [];
  }

  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    // nums 已经升序，nums[i] > 0 则之后不会有三个数之和为 0
    if (nums[i] > 0) {
      return res;
    }

    // nums 已排序，则两个数相同时是重复解，需要跳过
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        res.push([nums[i], nums[left], nums[right]]);

        // 跳过左界重复值
        while (left < right && nums[left] === nums[left + 1]) left++;
        // 跳过右界重复值
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      }
      // 说明 nums[right] 太大，要缩小
      else if (nums[i] + nums[left] + nums[right] > 0) {
        right--;
      }
      // 说明 nums[left] 太小，要增大
      else {
        left++;
      }
    }
  }

  return res;
};
// @lc code=end

console.log(
  threeSum([2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10])
);
