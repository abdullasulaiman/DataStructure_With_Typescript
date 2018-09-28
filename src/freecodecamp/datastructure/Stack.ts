export default class Stack<T> {
    storage = {};
    count = 0;

    push(item:T) {
        this.storage[this.count] = item;
        this.count++;
    }

    pop(): T {
        if(this.count === 0 ) return null;
        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    peek(): T {
        return this.storage[this.count - 1];
    }

    size(): number {
        return this.count;
    }

    isEmpty(): boolean {
        return this.count === 0;
    }
}