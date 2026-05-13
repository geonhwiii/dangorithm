export function solution(participant, completion) {
    const counts = new Map();

    participant.forEach((name) => addCount(counts, name, 1));
    completion.forEach((name) => addCount(counts, name, -1));

    for (const [name, count] of counts) {
        if (count === 1) return name;
    }
}

const addCount = (map, key, delta) => {
    map.set(key, (map.get(key) || 0) + delta);
};
