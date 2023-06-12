/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.head === null) throw new Error();

    let currentNode = this.head;
    let tailNode = this.tail;

    while (currentNode !== null) {
      if (currentNode.next === tailNode) {
        currentNode.next = null;
        this.tail = currentNode;
        this.length--;
        return tailNode.val
      }
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) throw new Error();

    let headNode = this.head;
    if (this.head === this.tail) this.tail = null;
    this.head = headNode.next;
    this.length--;

    return headNode.val
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let counter = 0;
    let currNode = this.head;
    while (currNode !== null) {
      if (counter === idx) return currNode.val;

      currNode = currNode.next;
      counter++;
    }
    throw new Error();
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let counter = 0;
    let currNode = this.head;
    while (currNode !== null) {
      if (counter === idx) {
        currNode.val = val;
        return;
      }
      currNode = currNode.next;
      counter++;
    }
    throw new Error();
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);
    let counter = 0;
    let currNode = this.head;
    while (currNode !== null) {
      if (counter === idx-1) {
        newNode.next = currNode.next;
        currNode.next = newNode;
        this.length++;

        return;
      }
      currNode = currNode.next;
      counter++;
    }
    throw new Error();
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let counter = 0;
    let currNode = this.head;

    while(currNode !== null) {
      if (counter === idx-1) {
        let removedNode = currNode.next;
        currNode.next = removedNode.next;
        this.length--;


        return removedNode.val;
      }
      currNode = currNode.next;
      counter++;
    }
    throw new Error();
  }

  /** average(): return an average of all values in the list */

  average() {
    let counter = 0;
    let sum = 0;
    let currNode = this.head;

    while(currNode !== null) {
      sum += currNode.val;
      counter++;
      currNode = currNode.next;
    }
    return sum / counter;
  }

  reverse() {
    let counter = 0;
    let currNode = this.head;

    while (counter < this.length) {
      console.log("next: ", currNode.next.val);
      let currHead = this.head;

      //remove next
      let currHeadNext = this.head.next;
      let newHead = currNode.next;
      currHead.next = newHead.next;
      this.head = newHead;
      this.head.next = currHeadNext;

      counter++;
    }
  }
}

module.exports = LinkedList;


counter = 0
currNode = this.head (1)
while (counter < this.length)

[1, 2, 3, 4]
counter = 0
curr (1)
x = this.head (1)
y = curr.next (2)
curr.next = curr.next.next (3)
this.head = y
this.head.next = x

currNode = currNode.next (1)
counter++

[2,1,3,4]
counter = 1
curr (1)
x = this.head (2)
y = curr.next
curr.next = curr.next.next (4)
this.head = y
this.head.next = x

curr = curr.next
counter++

[3,2,1,4]
[4,3,2,1]


[4,2,3,1]
[4,3,2,1]
