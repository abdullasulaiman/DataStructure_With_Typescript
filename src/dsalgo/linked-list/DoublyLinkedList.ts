class Node {
    public element;
    public next;
    public prev;
    constructor(element, next = null, prev = null) {
        this.element = element;
        this.next = next;
        this.prev = prev;
    }
}

export default class DoublyLinkedList {
    private length = 0;
    private head = null;
    private tail = null;

    insert(position, element) {
        let node = new Node(element);
        let current = this.head,
        previous = null,
        index = 0;
        if(position >= 0 && position <= this.length) {
            if(position === 0) {
                if(!this.head) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    this.head = node;
                }
            } else if(position === length) {
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else {
                while(index++ < position) {
                    current = current.next;
                    previous = current;
                }
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }

    removeAt(position) {
        let current = this.head,
        previous = null,
        index = 0;

        if(position > 0 && position < this.length) {

            if(position ==0 ) {
                this.head = current.next;
                if(length === 0) {
                    this.tail = null;
                } else {
                    this.head.prev = null;
                }
            } else if( position === this.length - 1) {
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = null;
            } else {
                while(index++ < position) {
                    current = current.next;
                    previous = current;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            this.length--;
            return current.element;
        } else {
            return null;
        }
    }
}