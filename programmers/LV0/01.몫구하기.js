/**
 *  * 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.
 *
 *  * 제한사항
 *  - 0 < num1 ≤ 100
 *  - 0 < num2 ≤ 100
 */

// 제한사항

function solution(num1, num2) {
  var answer = 0;
  answer = Math.floor(num1 / num2);
  return answer;
}

solution(10, 5); // 2
solution(7, 2); // 3

// ? 다른 풀이
function solution2(num1, num2) {
  var answer = 0;
  answer = ~~(num1 / num2);
  return answer;
}

console.log(solution(10, 5)); // 2
console.log(solution(7, 2)); // 3
