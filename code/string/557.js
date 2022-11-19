/*
 * @Author: wangqiaoling
 * @Date: 2022-11-19 20:35:56
 * @LastEditors: wangqiaoling
 * @Description: https://leetcode.cn/problems/reverse-words-in-a-string-iii/
 * @LastEditTime: 2022-11-19 21:03:33
 */
/**
 *
 * @param {*} s: string
 * @returns string
 */
const reverseWords1 = (s) => {
  return s.split(' ').map(item => item.split('').reverse().join('')).join(' ')
}

const reverseWords2 = (s) => {
  return s.split(/\s/g).map(item => item.split('').reverse().join('')).join(' ')
}

const reverseWords3 = (s) => {
  // 识别单词: /[\w']+/g  \w: 字符
  return s.match(/[\w']+/g).map(item => item.split('').reverse().join('')).join(' ')
}

export {
  reverseWords1,
  reverseWords2,
  reverseWords3
}
