export class RandomizedSet {
	private set: Set<number> = new Set();
	insert(val: number): boolean {
		const has = this.set.has(val);
		this.set.add(val);
		return !has;
	}
	remove(val: number): boolean {
		const has = this.set.has(val);
		this.set.delete(val);
		return has;
	}
	getRandom(): number {
		const values = [...this.set];
		return values[Math.floor(Math.random() * values.length)];
	}
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
