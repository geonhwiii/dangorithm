export function twoSum(numbers: number[], target: number): number[] {
  // 1. 포인터를 양 끝으로 배치
  let p1 = 0;
  let p2 = numbers.length - 1;

  // 2. numbers배열을 순회
  while (p1 < p2) {
    const sum = numbers[p1] + numbers[p2];
    if (sum === target) {
      return [p1 + 1, p2 + 1];
    }
    if (sum < target) {
      p1++;
    } else {
      p2--;
    }
  }
  return [];
}
