/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第 K 小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    k--;
    if (k === 0) {
      break;
    }

    root = root.right;
  }

  return root.val;
};
// @lc code=end

var kthSmallest = function (root, k) {
  return dfs(root, [k]).val;
};

const dfs = (root, kArr) => {
  if (!root) {
    return null;
  }

  const left = dfs(root.left, kArr);
  kArr[0]--;
  if (kArr[0] === 0) {
    return root;
  }

  const right = dfs(root.right, kArr);
  if (!left) return right;
  if (!right) return left;

  return left;
};

function test() {
  console.log(this === globalThis);
}

test()
