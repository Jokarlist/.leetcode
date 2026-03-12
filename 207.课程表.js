/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  /**
   * 1. 让入度为 0 的节点入列；
   * 2. 列中节点逐个出列，其相关节点入度 -1；
   * 3. 若相关节点入度减至 0，则其入列，重复步骤 123 直至队列空
   */

  // 节点的入度值数组。下标为节点，值为入度
  const inDegree = new Array(numCourses).fill(0);
  // 节点的关系表。key 为源节点，val 为目标节点
  const map = new Map();
  for (let i = 0; i < numCourses; i++) {
    map.set(i, []);
  }

  for (const [cur, pre] of prerequisites) {
    inDegree[cur]++;
    map.get(pre).push(cur);
  }

  const queue = [];
  for (let i = 0; i < inDegree.length; i++) {
    !inDegree[i] && queue.push(i);
  }

  let cnt = 0;
  while (queue.length) {
    const pre = queue.shift();
    cnt++;
    const relatedList = map.get(pre);
    if (!relatedList) continue;
    for (const cur of relatedList) {
      inDegree[cur]--;
      !inDegree[cur] && queue.push(cur);
    }
  }

  return cnt === numCourses;
};
// @lc code=end
