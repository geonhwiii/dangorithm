/**
 * * 문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을,
 * * 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.
 */

function solution(before, after) {
  const beforeMap = createWordMap(before);
  const afterMap = createWordMap(after);
  for (const [key, value] of beforeMap) {
    if (afterMap.get(key) !== value) return 0;
  }
  return 1;
}

function createWordMap(word) {
  let map = new Map();
  [...word].forEach((str) => {
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
