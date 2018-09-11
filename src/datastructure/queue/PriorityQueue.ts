import Queue from "./Queue";

class QueueElement<T> {
    public element:T;
    public priority:number;
    constructor(element:T, priority:number) {
        this.element = element;
        this.priority = priority;
    }
}

export default class PriorityQueue<T> extends Queue<T> {
    constructor() {
        super();
    }
    enqueue(element:T, priority:number = 0) {
        const queueElement:any = new QueueElement(element, priority);
        let added = false;
        for (let i=0; i < this.items.length; i++) {
            if(queueElement.priority < this.items[i]['priority'] ) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }   
        }
        if(!added) {
            this.items.push(queueElement);
        }
    }
}