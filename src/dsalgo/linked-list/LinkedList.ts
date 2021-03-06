import Node from "./Node";

class LinkedList {
  private length = 0;
  private head = null;

  append(element) {
    let node = new Node(element);
    let current = this.head;

    if (this.head === null) {
      this.head = node;
      return;
    } else {
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
      this.length++;
    }
  }

  removeAt(position) {
    if (position > -1 && position < this.length) {
      let current = this.head,
        previous = null,
        index = 0;
      if (position === 0) {
        current = this.head;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        this.length--;
        return current.element;
      }
    } else {
      return null;
    }
  }

  insert(position, element) {
    if (position >= 0 && position <= length) {
      var node = new Node(element);
      let current = this.head,
        previous = null,
        index = 0;
      if (position === 0) {
        node.next = current;
        this.head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current.next = node;
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

  toString() {
    let current = this.head;
    let string = '';

    while(current) {
      string += current.element + (current.next ? '\n' : ' ');
      current = current.next;
    }
    console.log(string);
  }

  indexOf(element) {
    let current = this.head,
    index = 0;
    while(current) {
      if(element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  remove(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  }

  isEmpty() {
    return this.length === 0;
  }

  size(){
    return this.length;
  }

  getHead() {
    return this.head;
  }


}
export default LinkedList;
