/**
 * * 문자열 s가 매개변수로 주어집니다.
 * * s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
 * * 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.
 */

function solution(s) {
  const countMap = getCountMap(s);
  return [...countMap]
    .filter((arr) => arr[1] === 1)
    .map((val) => val[0])
    .sort()
    .join("");
}

function getCountMap(s) {
  const map = new Map();
  [...s].forEach((str) => {
    const prev = map.get(str);
    if (!prev) {
      map.set(str, 1);
    } else {
      map.set(str, prev + 1);
    }
  });
  return map;
}

module.exports = solution;
