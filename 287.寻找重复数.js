/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // 数组看作等效链表，元素值即表示链表节点，又表示下一个链表节点的序数
  let slow = nums[0];
  let fast = nums[nums[0]];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  let head = 0;
  while (head !== slow) {
    head = nums[head];
    slow = nums[slow];
  }

  return head;
};
// @lc code=end
