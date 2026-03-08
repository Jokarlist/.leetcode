/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    // 当前节点指向上一节点
    cur.next = prev;
    // 移动 prev 和 cur 指针
    prev = cur;
    cur = next;
  }

  return prev;
};
// @lc code=end

// 递归解法
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  const reverseHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return reverseHead;
};

// 栈解法
var reverseList = function (head) {
  const stack = [];
  while (head) {
    stack.push(head);
    head = head.next;
  }

  if (!stack.length) {
    return null;
  }

  const reverse = stack.pop();
  let ptr = reverse;
  while (stack.length) {
    ptr.next = stack.pop();
    ptr = ptr.next;
  }

  ptr.next = null;

  return reverse;
};
