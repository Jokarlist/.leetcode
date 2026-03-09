/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  const queue = [root];
  const res = [];
  while (queue.length) {
    let curLevelNodeCnt = queue.length;
    const curLevelNodeVals = [];
    while (curLevelNodeCnt) {
      const cur = queue.shift();
      curLevelNodeVals.push(cur.val);
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
      curLevelNodeCnt--;
    }

    res.push(curLevelNodeVals);
  }

  return res;
};
// @lc code=end
