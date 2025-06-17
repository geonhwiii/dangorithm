export function solution(x: number, y: number, n: number) {
  const queue: [number, number][] = [];
  const visitedSet = new Set();

  queue.push([x, 0]);
  visitedSet.add(x);

  while (queue.length > 0) {
    const [current, count] = queue.shift()!;

    if (current === y) {
      return count;
    }

    if (current + n <= y && !visitedSet.has(current + n)) {
      queue.push([current + n, count + 1]);
      visitedSet.add(current + n);
    }

    if (current * 2 <= y && !visitedSet.has(current * 2)) {
      queue.push([current * 2, count + 1]);
      visitedSet.add(current * 2);
    }

    if (current * 3 <= y && !visitedSet.has(current * 3)) {
      queue.push([current * 3, count + 1]);
      visitedSet.add(current * 3);
    }
  }

  return -1;
}
