import Queue from "../src/datastructure/queue/Queue";

describe(('Queue class Test'), () => {
    let queue:Queue<number>;
    beforeEach(() => {
        queue = new Queue();
    })
    test('Test enqueue', () => {
        expect(queue.isEmpty()).toEqual(true);
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.size()).toEqual(3);
    })
    test('Test dequeue', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.dequeue()).toEqual(1);
    })
    test('Test front', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.front()).toEqual(1);
    })
})