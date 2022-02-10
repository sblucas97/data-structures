class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            return this;
        }

        let node = this.head;
        while(node.next) {
            node = node.next;
        }

        node.next = newNode;
        return this;
    }

    search(value) {
        if(!this.head) return false;

        let node = this.head;
        do {
            if(node.value === value) return node;
            node = node.next;
        } while(node);
        

        return false;
    }

    remove(value) {
        if(!this.head) return false;

        let node = this.head;
        let prev = null;
        

        while(node && node.value !== value) {
            prev = node;
            node = node.next;
        }

        if(!prev) {
            this.head = this.head.next;
            return node;
        }

        const removedNode = node;
        prev.next = node.next;
        return removedNode;
    }

    printList() {
        if(!this.head) return false;

        let node = this.head;
        do {
            console.log(`node: ${node.value} `);
            node = node.next;
        } while(node);
    }

    getSize() {
        if(!this.head) return 0;

        let node = this.head;
        let i = 0;
        
        do {
            i++;
            node = node.next;    
        } while(node);

        return i;
    }

    getFirst() {
        if(!this.head) return false;

        return this.head;
    }

    getLast() {
        if(!this.head) return false;

        let node = this.head;

        while(node.next) {
            node = node.next;
        }

        return node;
    }

}

const linkedList = new LinkedList();
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(4);
linkedList.insert(5);
linkedList.insert(6);
linkedList.insert(7);
linkedList.insert(8);
linkedList.insert(9);
const result = linkedList.search(4);
linkedList.remove(4);
linkedList.printList();
const length = linkedList.getSize();
const first = linkedList.getFirst();
const last = linkedList.getLast();
console.log(first)
console.log(last)
console.log(result)

