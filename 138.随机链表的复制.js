/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 随机链表的复制
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * 迭代 + 节点拆分
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  if (!head) {
    return null;
  }

  let ptr = head;
  while (ptr) {
    // 将原链表拓展成 node -> node' 的合并链表形式，即每一个原节点的后继节点为复制节点的形式
    ptr.next = new _Node(ptr.val, ptr.next, null);
    ptr = ptr.next.next;
  }

  ptr = head;
  while (ptr) {
    const copiedPtr = ptr.next;
    // 复制链表节点的随机节点，就是原链表节点的随机节点的下一个节点
    copiedPtr.random = ptr.random ? ptr.random.next : null;
    ptr = ptr.next.next;
  }

  ptr = head;
  const copiedNode = head.next;
  while (ptr) {
    const copiedPtr = ptr.next;
    // 从合并链表中拆分出原链表
    ptr.next = ptr.next.next;
    // 从合并链表中拆分出复制链表
    copiedPtr.next = copiedPtr.next ? copiedPtr.next.next : null;
    ptr = ptr.next;
  }

  return copiedNode;
};
// @lc code=end

// 回溯 + 哈希表
var copyRandomList = function (head, cachedNode = new Map()) {
  if (!head) {
    return null;
  }

  if (!cachedNode.has(head)) {
    const copiedNode = new _Node(head.val);
    cachedNode.set(head, copiedNode);
    copiedNode.next = copyRandomList(head.next, cachedNode);
    copiedNode.random = copyRandomList(head.random, cachedNode);
  }

  return cachedNode.get(head);
};

var copyRandomList = function (head) {
  if (!head) {
    return null;
  }

  const idxMap = new Map([[null, null]]);
  let ptr = head;
  let copiedNodes = [];
  let idx = 0;
  while (ptr) {
    copiedNodes.push(new _Node(ptr.val));
    idxMap.set(ptr, idx);
    ptr = ptr.next;
    idx++;
  }

  ptr = head;
  idx = 0;
  while (ptr) {
    const randomIdx = idxMap.get(ptr.random);
    copiedNodes[idx].next = copiedNodes[idx + 1] ?? null;
    copiedNodes[idx].random =
      randomIdx !== null ? copiedNodes[randomIdx] : null;

    ptr = ptr.next;
    idx++;
  }

  return copiedNodes[0];
};
