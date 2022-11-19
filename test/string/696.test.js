/*
 * @Author: wangqiaoling
 * @Date: 2022-11-19 21:07:39
 * @LastEditors: wangqiaoling
 * @Description:
 * @LastEditTime: 2022-11-19 21:46:54
 */
import { countBinarySubstrings } from '../../code/string/696'

test('countBinarySubstrings: 00110011', () => {
  expect(countBinarySubstrings('00110011')).toBe(6)
})

test('countBinarySubstrings: 00111011', () => {
  expect(countBinarySubstrings('00111011')).toBe(4)
})
