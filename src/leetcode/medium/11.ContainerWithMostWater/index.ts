export function maxArea(height: number[]): number {
  // 1. 포인터 추가
  let p1 = 0;
  let p2 = height.length - 1;

  // 2. 결과
  let result = 0;

  // 3. 포인터가 만날때 까지
  while (p1 < p2) {
    // 4. 높이
    const h1 = height[p1];
    const h2 = height[p2];

    // 5. 가로 * 높이 (둘중 낮은 높이로)
    const w = p2 - p1;
    const h = h1 < h2 ? h1 : h2;
    const area = w * h;

    // 6. 최댓값 저장
    if (result < area) {
      result = area;
    }

    // 7. 포인터 매칭
    if (h1 < h2) {
      p1++;
    } else {
      p2--;
    }
  }

  return result;
}
