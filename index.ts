import LinkedList from './src/datastructure/linked-list/LinkedList';
import Stack from './src/datastructure/stack/Stack';
import PriorityQueue from './src/datastructure/queue/PriorityQueue';
// import Queue from './src/datastructure/queue/Queue';

// const linkedList = new LinkedList();
// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);
// linkedList.prepend(4);
// const stack:Stack<number> = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack);

/** */
// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// console.log(queue.dequeue());

// const priority:PriorityQueue<string> = new PriorityQueue();
// priority.enqueue('Abdulla', 4);
// priority.enqueue('Nik', 3);
// priority.enqueue('Aleeza', 2);
// priority.enqueue('Aliya', 1);
// console.log(priority);
// console.log(priority.dequeue());

const linkedList:LinkedList<string> = new LinkedList<string>();
linkedList.append('One');
linkedList.append('Two');
console.log(linkedList.toString());
