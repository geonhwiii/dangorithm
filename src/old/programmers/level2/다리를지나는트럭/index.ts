export function solution(bridge_length: number, weight: number, truck_weights: number[]) {
	let time = 0;
	let bridgeWeight = 0;
	let bridgeQueue: { weight: number; time: number }[] = [];

	while (truck_weights.length > 0 || bridgeQueue.length > 0) {
		time++;

		bridgeQueue = bridgeQueue.filter((truck) => {
			if (truck.time === 1) {
				bridgeWeight -= truck.weight;
				return false;
			}
			truck.time--;
			return true;
		});

		if (truck_weights.length > 0 && bridgeQueue.length < bridge_length && bridgeWeight + truck_weights[0] <= weight) {
			const truckWeight = truck_weights.shift()!;
			bridgeQueue.push({ weight: truckWeight, time: bridge_length });
			bridgeWeight += truckWeight;
		}
	}

	return time;
}
