export default class Node {
    public element;
    public next;
    constructor( element, next = null) {
        this.element = element;
        this.next = null;
    }
}