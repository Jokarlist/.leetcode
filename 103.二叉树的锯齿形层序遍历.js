/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }

  const queue = [root];
  const res = [];
  let isOrderLeft = true;
  while (queue.length) {
    const curLevelNodeVals = [];
    let curLevelNodeCnt = queue.length;
    while (curLevelNodeCnt) {
      const cur = queue.shift();
      if (isOrderLeft) {
        curLevelNodeVals.push(cur.val);
      } else {
        curLevelNodeVals.unshift(cur.val);
      }

      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
      curLevelNodeCnt--;
    }

    res.push(curLevelNodeVals);
    isOrderLeft = !isOrderLeft;
  }

  return res;
};
// @lc code=end
