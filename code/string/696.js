/*
 * @Author: wangqiaoling
 * @Date: 2022-11-19 21:01:46
 * @LastEditors: wangqiaoling
 * @Description: https://leetcode.cn/problems/count-binary-substrings/
 * @LastEditTime: 2022-11-19 21:55:57
 */
/**
 * @desc:
 * 1. 得到0和1的连续分组数字:
 * 将字符串 s 按照 0 和 1 的连续段分组，存在 counts 数组中:
 * 例如 s = 00111011，可以得到这样的 counts 数组：counts=[2,3,1,2]
 * 2. counts 数组中两个相邻的数一定代表的是两种不同的字符
 * 两个相邻的数字表示为m,n,它们对应着 m 个 0 和 n 个 1, 或者 n 个 1 和 m 个 0。
 * 它们能组成的满足条件的子串数目为 min⁡{m,n}，即一对相邻的数字对答案的贡献。
 * @param {*} s
 * @returns number
 */
const countBinarySubstrings = (s) => {
  const len = s.length
  let i = 0
  const counts = []
  while (i < len) {
    const chart = s[i]
    let count = 0
    while (i < len && chart === s[i]) {
      count++
      i++
    }
    counts.push(count)
  }
  console.log(counts)
  let res = 0
  for (let i = 1; i < counts.length; i++) {
    res += Math.min(counts[i], counts[i - 1])
  }
  return res
}
export {
  countBinarySubstrings
}
