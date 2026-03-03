/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let ptr1 = headA;
  let ptr2 = headB;
  while (ptr1 !== ptr2) {
    ptr1 = !ptr1 ? headB : ptr1.next;
    ptr2 = !ptr2 ? headA : ptr2.next;
  }

  return ptr1;
};
// @lc code=end

var getIntersectionNode = function (headA, headB) {
  const visited = new Set();
  let ptr = headA;
  while (ptr) {
    visited.add(ptr);
    ptr = ptr.next;
  }

  ptr = headB;
  while (ptr) {
    if (visited.has(ptr)) {
      return ptr;
    }

    ptr = ptr.next;
  }

  return null;
};
