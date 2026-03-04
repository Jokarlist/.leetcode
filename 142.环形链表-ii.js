/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) {
    return null;
  }

  let fast = head;
  let slow = head;
  while (fast) {
    slow = slow.next;

    // 链表没到底
    if (fast.next) {
      fast = fast.next.next;
    } 
    // 到底了
    else {
      return null;
    }

    // 快慢指针相遇时，慢指针在环内已走 (n-1)圈*环长
    // 此时慢指针离环入口的距离等于头指针以相同步长走到环入口的距离
    if (fast === slow) {
      let ptr = head;
      while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
      }

      return ptr;
    }
  }

  return null;
};
// @lc code=end

var detectCycle = function (head) {
  const visited = new Set();
  let node = head;
  while (node) {
    if (visited.has(node)) {
      return node;
    } else {
      visited.add(node);
      node = node.next;
    }
  }

  return null;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);

node1.next = node2;
node2.next = node1;

detectCycle(node1);
