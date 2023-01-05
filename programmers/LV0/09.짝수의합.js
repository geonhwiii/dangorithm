/**
 * * 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
 */

function solution(n) {
  return Array.from({ length: n })
    .map((_, i) => i + 1)
    .filter((num) => num % 2 === 0)
    .reduce((prev, cur) => prev + cur, 0);
}

console.log(solution(10)); // 30
console.log(solution(4)); // 6
