/**
 * * 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다.
 * * 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.
 */

// function solution(numbers, direction) {
//   const answer = [];
//   const lastIndex = numbers.length;
//   if (direction === "left") {
//     numbers.map((num, i) => {
//       if (i !== 0) {
//         answer[i - 1] = num;
//       } else {
//         answer[lastIndex - 1] = num;
//       }
//     });
//   } else {
//     numbers.map((num, i) => {
//       if (i !== lastIndex - 1) {
//         answer[i + 1] = num;
//       } else {
//         answer[0] = num;
//       }
//     });
//   }
//   return answer;
// }

function solution(numbers, direction) {
  if (direction === "right") {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }
  return numbers;
}

module.exports = solution;
