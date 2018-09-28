export default class Set<T> {
    collections = [];

    has(item: T): boolean {
        return this.collections.indexOf(item) !== -1;
    }

    add(item:T) : boolean {
        if(!this.has(item)) {
            this.collections.push(item);
            return true;
        }
        return false;
    }

    remove(item:T): boolean {
        if(this.has(item)) {
            const index = this.collections.indexOf(item);
            this.collections.splice(index, 1);
            return true;
        }
        return false;
    }

    values (): T[] {
        return this.collections;
    }

    size(): number {
      return this.collections.length;
    }

    union(otherSet:Set<T>): Set<T> {
        const unionSet = new Set<T>();
        const firstSet = this.values();
        const secondSet = otherSet.values();
        firstSet.forEach(element => {
            unionSet.add(element);
        });
        secondSet.forEach(element => {
            unionSet.add(element);
        });
        return unionSet;
    }

    intersection(otherSet:Set<T>): Set<T> {
        const intersectionSet:Set<T> = new Set<T>();
        const firstSet = this.values();
        firstSet.forEach(e => {
            if(otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    }

    difference(otherSet:Set<T>): Set<T> {
        const differenceSet:Set<T> = new Set<T>();
        const firstSet = this.values();
        firstSet.forEach(e => {
            if(!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }

    subset(otherSet:Set<T>) {
        const firstSet = this.values();
        return firstSet.every(e => {
            return otherSet.has(e);
        });
    }
}