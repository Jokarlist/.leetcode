/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
  while (root) {
    // p 和 q 都在 root 右子树
    if (root.val < p.val && root.val < q.val) {
      root = root.right;
    } 
    // p 和 q 都在 root 左子树
    else if (root.val > p.val && root.val > q.val) {
      root = root.left;
    }
    // 1. p 和 q 分列 root 两侧；2. root 等于 p 或 q
    else {
      return root;
    }
  }
};
// @lc code=end

// 层序遍历
var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) {
    return root;
  }

  const queue = [root];
  while (queue.length) {
    const cur = queue.shift();
    if (
      (cur.val > p.val && cur.val < q.val) ||
      (cur.val > q.val && cur.val < p.val)
    ) {
      return cur;
    }

    if (cur === p || cur === q) {
      return cur;
    }

    cur.left && queue.push(cur.left);
    cur.right && queue.push(cur.right);
  }

  return null;
};

// DFS，且优化减少判断次数
var lowestCommonAncestor = function (root, p, q) {
  // 让 p 始终小于 q
  if (p.val >= q.val) {
    const tmp = p;
    p = q;
    q = tmp;
  }

  while (root) {
    // p 和 q 都在 root 右子树
    if (root.val < p.val) {
      root = root.right;
    } 
    // p 和 q 都在 root 左子树
    else if (root.val > q.val) {
      root = root.left;
    }
    // 1. p 和 q 分列 root 两侧；2. root 等于 p 或 q
    else {
      return root;
    }
  }
};
