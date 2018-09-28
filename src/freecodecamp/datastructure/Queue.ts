export default class Queue {
    collections = [];

    enqueue(item) {
        this.collections.push(item);
    }

    dequeu() {
        this.collections.shift();
    }

    front() {
        return this.collections[0];
    }

    size() {
        return this.collections.length;
    }

    isEmpty(){
        return (this.collections.length === 0);
    }
}