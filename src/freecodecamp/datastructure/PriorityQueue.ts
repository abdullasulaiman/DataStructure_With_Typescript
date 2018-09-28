export default class PriorityQueue {
    collections = [];

    enqueue(item) {
        if(this.isEmpty()) {
            this.collections.push(item);
        } else {
            let added = false;
            for(let i = 0 ; i <this.collections.length; i++) {
                if(item[1] < this.collections[i][1]) {
                    this.collections.splice(i, 0, item);
                    added = true;
                    break;
                }
            }
            if(!added) {
                this.collections.push(item);
            }
        }
        
    }

    dequeu() {
        const value = this.collections.shift();
        return value[0];
    }

    front() {
        return this.collections[0];
    }

    size() {
        return this.collections.length;
    }

    isEmpty() {
        return this.collections.length === 0;
    }
}