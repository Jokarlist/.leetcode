/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const len = nums.length;
  if (len <= 1) {
    return nums[0];
  } else if (len === 2) {
    return Math.max(nums[0], nums[1]);
  }

  return Math.max(robRange(nums, 0, len - 1), robRange(nums, 1, len));
};

const robRange = (nums, start, end) => {
  let prev1 = nums[start]; // dp[i - 2]
  let prev2 = Math.max(nums[start], nums[start + 1]); // dp[i - 1]
  for (let i = start + 2; i < end; i++) {
    const temp = prev2;
    prev2 = Math.max(prev1 + nums[i], prev2); // dp[i]
    prev1 = temp;
  }

  return prev2;
};
// @lc code=end

var rob = function (nums) {
  const len = nums.length;
  if (len <= 1) {
    return nums[0];
  }

  let headPrev1 = nums[0]; // dp[i - 2]
  let headPrev2 = Math.max(nums[0], nums[1]); // dp[i - 1]
  let tailPrev1 = nums[1]; // dp[i - 2]
  let tailPrev2 = Math.max(nums[1], nums[2]); // dp[i - 1]
  for (let i = 2; i < len; i++) {
    if (i < len - 1) {
      const temp = headPrev2;
      headPrev2 = Math.max(headPrev1 + nums[i], headPrev2); // dp[i]
      headPrev1 = temp;
    }

    if (i >= 3) {
      const temp = tailPrev2;
      tailPrev2 = Math.max(tailPrev1 + nums[i], tailPrev2); // dp[i]
      tailPrev1 = temp;
    }
  }

  if (len < 3) {
    return headPrev2;
  }

  return Math.max(headPrev2, tailPrev2);
};
