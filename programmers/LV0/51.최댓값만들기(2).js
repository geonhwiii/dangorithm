/**
 * * 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
 */

function solution(numbers) {
  const sorted = numbers.sort((a, b) => a - b);
  const leng = numbers.length;
  return Math.max(sorted[0] * sorted[1], sorted[leng - 1] * sorted[leng - 2]);
}

module.exports = solution;
