/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 超出树，或搜到 p/q，则返回对应值
  if (!root || root === p || root === q) {
    return root;
  }

  // 左子树搜 p/q
  const left = lowestCommonAncestor(root.left, p, q);
  // 右子树搜 p/q
  const right = lowestCommonAncestor(root.right, p, q);
  // 右子树搜到 p/q，左子树没搜到，直接返回右子树搜到的值
  if (!left) {
    return right;
  }

  // 左子树搜到 p/q，右子树没搜到，直接返回左子树搜到的值
  if (!right) {
    return left;
  }

  // 左右子树都有搜到值，则 p 和 q 分列 root 的两侧，返回 root
  return root;
};
// @lc code=end
