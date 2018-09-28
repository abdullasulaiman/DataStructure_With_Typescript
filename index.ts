import LinkedList from './src/datastructure/linked-list/LinkedList';
// import Stack from './src/datastructure/stack/Stack';
// import PriorityQueue from './src/datastructure/queue/PriorityQueue';
import { array } from 'prop-types';
import { pre } from 'restify';
import Stack from './src/freecodecamp/datastructure/Stack';
import Set from './src/freecodecamp/datastructure/Set';
import PriorityQueue from './src/freecodecamp/datastructure/PriorityQueue';
import BinarySearchTree from './src/freecodecamp/datastructure/BinarySearchTree/BinarySearchTree';
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

// const linkedList:LinkedList<string> = new LinkedList<string>();
// linkedList.append('One');
// linkedList.append('Two');
// console.log(linkedList.toString());

const inputArray = [1,2,3,4,5,7];
function findTheMissingNumber(array, size) {
    let total = (size + 1) * (size + 2) / 2;
    for(let i = 0; i < size; i++) {
        total -= array[i];
    }
    return total;
}

function minimumDistBetweenNumbers (arr, n, x, y) {
        let i = 0;
        let min_dist = Number.MAX_VALUE;
        let prev=0;
 
        // Find the first occurence of any of the two numbers (x or y)
        // and store the index of this occurence in prev
        for (i = 0; i < n; i++) 
        {
            if (arr[i] == x || arr[i] == y) 
            {
                prev = i;
                break;
            }
        }
 
        // Traverse after the first occurence
        for (; i < n; i++) 
        {
            if (arr[i] == x || arr[i] == y) 
            {
                // If the current element matches with any of the two then
                // check if current element and prev element are different
                // Also check if this value is smaller than minimum distance 
                // so far
                if (arr[prev] != arr[i] && (i - prev) < min_dist) 
                {
                    min_dist = i - prev;
                    prev = i;
                } 
                else
                    prev = i;
            }
        }
 
        return min_dist;
}

// console.log(findTheMissingNumber(inputArray, inputArray.length));
// const input = [3, 5, 4, 2, 6, 5, 6, 6, 5, 4, 8, 3];
// const size = inputArray.length;
// console.log(minimumDistBetweenNumbers(input,size, 5, 8));

const arr1 = [1,2,4,5,6];
const arr2 = [2,3,5,7];
function unionOfTwoArrays(arr1, arr2, m , n) {
    let i = 0, j = 0;
    while(i < m && j < n) {
       if(arr1[i] < arr2[j] ) {
        console.log(arr1[i++]); // increment i++ dont print
       }else if(arr2[j] < arr1[i]) {
          console.log(arr2[j++])  // Increment j++ dont print
       } else {
          console.log(arr2[j++]) // In Intersection only this should be printed
        i++;
       }
    }
    while(i < m) {
        console.log(arr1[i++])
    }
    while(j < n) {
        console.log(arr2[j++])
    }
}

// unionOfTwoArrays(arr1, arr2, arr1.length, arr2.length);


var pickedLeaderInput = [16, 17, 4, 3, 5, 2];

function pickLeader(arr) {
    let size = arr.length - 1;
    for(let i = 0 ; i < size; i++) {
        let j;
        for(j = i + 1; j < size; j ++) {
            if(arr[i] <= arr[j]) {
                break;
            }
        }
        if( j === size) {
            console.log(arr[i], '\n');
        }
    }
}

function pickLeaderOption2(arr) {
    let size = arr.length;
    let max_size = arr[size-1];
    console.log(max_size);

    for(let i = size + 2; i >=0; i-- ) {
        if(max_size < arr[i]) {
            max_size = arr[i];
            console.log(max_size);
        }
    }
}

var isPalindrome = function(str) {
    console.log(str);
    var strLen = str.length;
    if (strLen === 0 || strLen === 1) {
        return true;
    }
    if (str[0] === str[strLen - 1]) {
        return isPalindrome( str.slice(1, strLen - 1) );
    }
    return false;
};
// console.log(isPalindrome('madam'));

// pickLeader(pickedLeaderInput);
// pickLeaderOption2(pickedLeaderInput);

// const stackImpl = new Stack<number>();
// stackImpl.push(1);
// stackImpl.push(2);
// stackImpl.push(3);

// const setImpl1 = new Set<number>();
// setImpl1.add(1);
// setImpl1.add(2);
// setImpl1.add(3);
// setImpl1.add(4);
// const setImpl2 = new Set<number>();
// setImpl2.add(1);
// setImpl2.add(2);
// setImpl2.add(8);
// console.log(setImpl2.difference(setImpl1));
// console.log(setImpl);
// console.log(setImpl.remove(4));
// console.log(setImpl1.subset(setImpl2));

// const priorityQueue = new PriorityQueue();
// priorityQueue.enqueue(['Abdulla', 1]);
// priorityQueue.enqueue(['Nikhath', 2]);
// priorityQueue.enqueue(['Aleeza', 3]);

// console.log(priorityQueue);

const binarySearch = new BinarySearchTree();
binarySearch.add(9);
binarySearch.add(4);
binarySearch.add(3);
binarySearch.add(6);
binarySearch.add(7);
binarySearch.add(5);
binarySearch.add(17);
binarySearch.add(22);
binarySearch.add(20);
binarySearch.add(10);

console.log('findMin ', binarySearch.findMin());
console.log('findMax ', binarySearch.findMax());
console.log('isPresent ', binarySearch.isPresent(20));
// console.log('removeNode ', binarySearch.remove(2));
console.log('find ', binarySearch.find(2));
console.log('InOrder ', binarySearch.inOrder());
console.log('PreOrder ', binarySearch.preOrder());
console.log('PostOrder ', binarySearch.postOrder());
console.log('LevelOrder ', binarySearch.levelOrder());
