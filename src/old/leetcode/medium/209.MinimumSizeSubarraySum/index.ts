export function minSubArrayLen(target: number, nums: number[]): number {
  // 1단계: 필요한 변수들을 선언합니다
  // - 최소 길이를 저장할 변수 (초기값은 매우 큰 수 또는 배열 길이 + 1)
  // - 현재 윈도우의 합을 저장할 변수
  // - 왼쪽 포인터 (left)
  // 2단계: 오른쪽 포인터(right)를 0부터 배열 끝까지 이동시키며 반복
  // 3단계: 현재 윈도우의 합이 target 이상이 될 때까지 right를 이동
  // 4단계: 합이 target 이상이 되면, 최소 길이를 업데이트하고 left를 이동
  // 5단계: 최소 길이가 업데이트되지 않았다면 0 반환, 그렇지 않으면 최소 길이 반환
  let minLength = nums.length + 1;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      // 현재 윈도우의 길이를 계산하고, 최소값과 비교해서 업데이트
      const currentLength = right - left + 1;
      minLength = Math.min(minLength, currentLength);

      // left를 오른쪽으로 이동시키고, 합에서 빼기
      // 왜 필요한가? 윈도우를 줄여서 더 짧은 서브배열을 찾기 위함
      // 예: [2,3,1,2] (합=8) -> [3,1,2] (합=6)로 줄이면서 더 짧은 길이를 탐색
      sum -= nums[left]; // 윈도우에서 빠지는 원소를 합에서 제거
      left++; // 윈도우의 시작점을 오른쪽으로 이동
    }
  }

  // minLength가 초기값(nums.length + 1)과 같다면 업데이트되지 않은 것이므로 0 반환
  // 그렇지 않으면 최소 길이 반환
  return minLength === nums.length + 1 ? 0 : minLength;
}
