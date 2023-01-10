/**
 * * 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
 * * 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.
 */
function solution(array) {
  const countObj = array.reduce(
    (arr, cur) =>
      arr[cur] ? { ...arr, [cur]: arr[cur] + 1 } : { ...arr, [cur]: 1 },
    {}
  );
  const max = Math.max(...Object.values(countObj));
  const dupleList = Object.keys(countObj).filter(
    (key) => countObj[key] === max
  );
  return dupleList.length === 1 ? +dupleList[0] : -1;
}
module.exports = solution;
