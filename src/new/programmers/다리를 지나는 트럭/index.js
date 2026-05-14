export function solution(bridge_length, weight, truck_weights) {
  const bridge = new Array(bridge_length).fill(0);
  let bridgeWeight = 0;
  let time = 0;
  let nextIndex = 0;

  while (bridgeWeight > 0 || nextIndex < truck_weights.length) {
    time += 1;
    bridgeWeight -= bridge.shift();

    const canEnterNext =
      nextIndex < truck_weights.length &&
      bridgeWeight + truck_weights[nextIndex] <= weight;

    if (canEnterNext) {
      const w = truck_weights[nextIndex];
      bridge.push(w);
      bridgeWeight += w;
      nextIndex += 1;
    } else {
      bridge.push(0);
    }
  }

  return time;
}
