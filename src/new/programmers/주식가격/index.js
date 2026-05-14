// now: 한 초씩 흐르는 시각. pendingStarts: 아직 "첫 하락 시각"을 모르는 과거 인덱스.
export function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0);
  const pendingStarts = [];

  for (let now = 0; now < n; now++) {
    while (
      pendingStarts.length > 0 &&
      prices[pendingStarts.at(-1)] > prices[now]
    ) {
      const start = pendingStarts.pop();
      answer[start] = now - start;
    }
    pendingStarts.push(now);
  }

  while (pendingStarts.length > 0) {
    const start = pendingStarts.pop();
    answer[start] = n - 1 - start;
  }

  return answer;
}
