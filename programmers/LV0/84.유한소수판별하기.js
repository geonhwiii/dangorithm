/**
 * * 소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다.
 * * 분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다.
 * * 유한소수가 되기 위한 분수의 조건은 다음과 같습니다.
 */
function solution(a, b) {
  b /= gcd(a, b);
  while (b % 2 === 0) {
    b /= 2;
  }
  while (b % 5 === 0) {
    b /= 5;
  }
  return b === 1 ? 1 : 2;
}
function gcd(a, b) {
  return a % b === 0 ? b : gcd(b, a % b);
}
module.exports = solution;
