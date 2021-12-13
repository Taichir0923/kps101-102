// Singly linked list
// Doubly linked list
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const node = new Node(12)

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(arg){
        const newNode = new Node(arg)
        if(!this.length){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this.length;
    }

    unshift(arg){
        const newNode = new Node(arg);
        if(!this.length){
            this.head = newNode;
            this.tail = newNode;
        } else {
            const oldHead = this.head;
            this.head = newNode;
            this.head.next = oldHead;
        }

        this.length++;
        return this.length
    }

    shift(){
        if(!this.length) return undefined;
        let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            oldHead.next = null;
        }

        this.length--;
        return oldHead;
    }
}
// prev , next

const list = new SinglyLinkedList()

list.push(10)
list.push(11)
list.push(12)
list.push(13)
list.push(14)

// Stack

// QUEUE - FIFO - first in first out
// TREE