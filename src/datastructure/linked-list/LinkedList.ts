import Node from "./Node";

export default class LinkedList<T> {
    private head:Node<T> = null;
    private length:number = 0;
    
    append( data) {
        let node = new Node<T>(data);
        let current;
        if(this.head === null) {
            this.head = node;
        } else {
          current = this.head;
          while(current.next) {
              current = current.next;
          }  
          current.next = node;
        }
        this.length++;
    }

    removeAt (position){
        if(position > -1 && position < this.length) {
            let current = this.head;
            let previous;
            let index = 0;
            if(position === 0) {
                this.head = current.next;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.length--;
            return current.data;
        } else {
            return null
        }
    };

    insert (position, element){
        if(position >=0 && position <= this.length) {
            let node = new Node<T>(element);
            let current = this.head;
            let previous;
            let index = 0;
            if(position === 0) {
                node.next = current;
                this.head = node;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
        } else {
            return false;
        }
    }

    remove (element){
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    indexOf (element){
        let current = this.head;
        let index = 0;
        while(current) {
            if(element === current.data) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    isEmpty () {
        return this.length === 0;
    }

    size () {
        return this.length;
    }

    toString (){
        let current = this.head;
        let string = '';

        while(current) {
            string += current.data + (current.data ? '\n' : ' ');
            current = current.next;
        }
        return string;
    }

    getHead () {
        return this.head;
    };

    print () {

    }
}