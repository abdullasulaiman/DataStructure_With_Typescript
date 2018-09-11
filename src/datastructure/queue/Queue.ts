export default class Queue<T> {
    protected items:T[] = [];

    constructor() {
        this.items = [];
    }

    enqueue (item:T) {
        this.items.push(item);
    }

    dequeue () :T {
        return this.items.shift();
    }

    isEmpty () : boolean {
        return this.items.length === 0;
    }

    size () : number {
        return this.items.length;
    }

    front() : T {
        return this.items[0];
    }

    print() : void {
        console.log(this.items.toString());
    }

}