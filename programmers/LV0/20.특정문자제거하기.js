/**
 * * 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
 */

// function solution(str, letter) {
//   return str.split(letter).join("");
// }

function solution(str, letter) {
  const regex = new RegExp(letter, "g");
  return str.replace(regex, "");
}

console.log(solution("abcdef", "f")); // "abcde"
console.log(solution("BCBdbe", "B")); // "Cdbe"
