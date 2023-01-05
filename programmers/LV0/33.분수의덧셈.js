/**
 * * 첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다.
 * * 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
 */

// ? 최대공약수
function calculateGCD(a, b) {
  return a % b ? calculateGCD(b, a % b) : b;
}

function solution(denum1, num1, denum2, num2) {
  // let gcd = 1;
  const denum3 = denum1 * num2 + denum2 * num1;
  const num3 = num1 * num2;
  // for (let i = 1; i < denum3 + 1; i++) {
  //   if (denum3 % i === 0 && num3 % i === 0) {
  //     gcd = i;
  //   }
  // }
  gcd = calculateGCD(denum3, num3);
  return [denum3 / gcd, num3 / gcd];
}
module.exports = solution;
