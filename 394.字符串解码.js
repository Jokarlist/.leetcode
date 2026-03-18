/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  let str = "";
  let repeatTimes = 0;
  for (const char of s) {
    if (char >= "0" && char <= "9") {
      repeatTimes = repeatTimes * 10 + +char;
    } else if (char === "[") {
      // [<当前串值>, <下一个子串需要重复的次数>] 入栈
      stack.push([str, repeatTimes]);
      str = "";
      repeatTimes = 0;
    } else if (char === "]") {
      const [prevStr, times] = stack.pop();
      str = prevStr + str.repeat(times);
    } else {
      str += char;
    }
  }

  return str;
};
// @lc code=end

var decodeString = function (s) {
  return dfs(s, 0, 1).str;
};

const dfs = (s, i, repeatTimes) => {
  let str = "";

  while (i < s.length) {
    if (s[i] >= "1" && s[i] <= "9") {
      let numStr = "";
      let j = i;
      while (s[j] >= "0" && s[j] <= "9") {
        numStr += s[j];
        j++;
      }

      const { str: subStr, i: curIdx } = dfs(s, j + 1, +numStr);
      str += subStr;
      i = curIdx;
    } else if (s[i] === "]") {
      break;
    } else {
      str += s[i];
    }

    i++;
  }

  return { str: str.repeat(repeatTimes), i };
};
