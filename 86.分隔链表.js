/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const leftStart = new ListNode(-1);
  let left = leftStart;
  const rightStart = new ListNode(-1);
  let right = rightStart;
  while (head) {
    if (head.val < x) {
      left.next = head;
      left = left.next;
    } else {
      right.next = head;
      right = right.next;
    }

    head = head.next;
  }

  right.next = null;
  left.next = rightStart.next;

  return leftStart.next;
};
// @lc code=end
