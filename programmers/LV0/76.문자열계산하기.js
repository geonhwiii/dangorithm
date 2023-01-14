/**
 * * my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때,
 * * 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.
 */

const PLUS = "+";
const MINUS = "-";
function solution(my_string) {
  const calcList = my_string.split(" ");
  let answer = 0;
  let method = PLUS;
  for (const value of calcList) {
    switch (value) {
      case PLUS:
      case MINUS:
        method = value;
        break;
      default:
        if (method === PLUS) {
          answer += +value;
        } else {
          answer -= +value;
        }
        break;
    }
  }
  return answer;
}
module.exports = solution;
