/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const path = [];
  const pathList = [];
  const dfs = (root, targetSum) => {
    if (!root) {
      return;
    }

    targetSum -= root.val;
    path.push(root.val);

    if (!root.left && !root.right && !targetSum) {
      pathList.push([...path]);
    }

    dfs(root.left, targetSum);
    dfs(root.right, targetSum);

    path.pop();
  };

  dfs(root, targetSum);

  return pathList;
};

// @lc code=end
