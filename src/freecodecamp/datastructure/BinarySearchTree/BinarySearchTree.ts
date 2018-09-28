import Node from "./Node";
import { node } from "prop-types";

export default class BinarySearchTree {
    root;

    constructor() {
        this.root = null;
    }

    add(data) {
        const node = this.root;
        if(node === null) {
            this.root = new Node(data);
            return;
        }
        const searchTree = (node) => {
            if(data < node.data) {
                if(node.left === null) {
                    node.left = new Node(data);
                    return;
                } else if(node.left !== null ){
                    return searchTree(node.left);
                }
            } else if( data > node.data) {
                if(node.right === null) {
                    node.right = new Node(data);
                    return;
                } else if(node.right !== null) {
                    return searchTree(node.right);
                }
            } else {
                return null;
            }
        }
        return searchTree(node);
    }

    findMin() {
        let current = this.root;
        while(current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    findMax() {
        let current = this.root;
        while(current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    find(data) {
        let current = this.root;
        while(current.data !== data) {
            if(data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if(current === null) {
                return null;
            }
        }
        return current;
    }

    isPresent(data) {
        let current = this.root;
        while(current) {
            if(data === current.data) {
                return true;
            }
            if(data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    remove(data) {
        const removeNode = (node, data) => {
            if(node === null) {
                return;
            }
            if(data == node.data) {
                if(node.left === null && node.right === null ) {
                    return null;
                }
                if(node.left === null) {
                    return node.right;
                }
                if(node.right === null) {
                    return node.left;
                }
                let tempNode = node.right;
                while(tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data; 
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if( data < node.data ) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }


    findMinHeight(node = this.root) {
        if(node === null) {
            return -1;
        }
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);

        if(left < right ) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    findMaxHeight(node = this.root) {
        if(node === null) {
            return -1;
        }
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);

        if(left > right ) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    inOrder() {
        if(this.root === null) {
            return null;
        } else {
            const results = [];
            const traverseInOrder = (node) => {
                node.left && traverseInOrder(node.left);
                results.push(node.data);
                node.right && traverseInOrder(node.right);

            }
            traverseInOrder(this.root);
            return results;
        }
    }

    preOrder() {
        if(this.root === null) {
            return null;
        } else {
            const results = [];
            const traversePreOrder = (node) => {
                results.push(node.data);
                node.left && traversePreOrder(node.left);
                node.right && traversePreOrder(node.right);

            }
            traversePreOrder(this.root);
            return results;
        }
    }

    postOrder() {
        if(this.root === null) {
            return null;
        } else {
            const results = [];
            const traversePostOrder = (node) => {
                node.left && traversePostOrder(node.left);
                node.right && traversePostOrder(node.right);
                results.push(node.data);
            }
            traversePostOrder(this.root);
            return results;
        }
    }

    levelOrder() {
        const results = [];
        const Q = [];
        if(this.root !== null) {
            Q.push(this.root);
            while(Q.length > 0) {
                let node = Q.shift();
                results.push(node.data);
                if(node.left !== null){
                    Q.push(node.left);
                }
                if(node.right !== null) {
                    Q.push(node.right)
                }
            }
            return results;
        } else {
            return null;
        }
    }
}