export default class Stack<T> {
    private items:T[] = [];
    constructor() {

    }
    push (item:T): void {
      this.items.push(item);
    }

    pop (): T {
     return this.items.pop();
    }

    peek () : T {
        return this.items[this.items.length - 1];
    }

    isEmpty (): boolean {
        return this.items.length === 0;
    }

    clear (): void {
        this.items =[];
    }

    size (): number {
        return this.items.length;
    }
}