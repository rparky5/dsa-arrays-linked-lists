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

    if (this.length === 1) {
      let tailNodeVal = currentNode.val;
      this.head = null;
      this.tail = null;
      this.length--;

      return tailNodeVal;
    }

    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }

    let tailNodeVal = currentNode.next.val;
    currentNode.next = null;
    this.tail = currentNode;
    this.length--;

    return tailNodeVal;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) throw new Error();

    let headNode = this.head;
    if (this.head === this.tail) this.tail = null;
    this.head = headNode.next;
    this.length--;

    return headNode.val;
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
    if (idx === 0) {
      this.unshift(val);
      return;
    }

    if (idx === this.length) {
      this.push(val);
      return;
    }

    let newNode = new Node(val);
    let counter = 0;
    let currNode = this.head;

    while (currNode !== null) {
      if (counter === idx - 1) {
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
    if (idx === 0) {
      return this.shift();
    }

    if (idx === this.length - 1) {
      return this.pop();
    }

    let counter = 0;
    let currNode = this.head;

    while (currNode !== null) {
      if (counter === idx - 1) {
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
    if (this.length === 0) return 0;

    let counter = 0;
    let sum = 0;
    let currNode = this.head;

    while (currNode !== null) {
      sum += currNode.val;
      counter++;
      currNode = currNode.next;
    }
    return sum / counter;
  }

  reverseInPlace() {
    // let counter = 0;
    // let currNode = this.head;

    // while (counter < this.length - 1) {
    //   let currHead = this.head;

    //   //store temp values
    //   let newHead = currNode.next;
    //   let newHeadNext = currNode.next.next;
    //   //remap
    //   currHead.next = newHeadNext;
    //   this.head = newHead;
    //   this.head.next = currHead;
    //   this.read();

    //   counter++;
    // }
    // this.tail = currNode;
    // this.read();

    let left = 0;
    let right = this.length - 1;

    while (left <= right) {
      let tempLeftVal = this.getAt(left);
      this.setAt(left, this.getAt(right));
      this.setAt(right, tempLeftVal);

      left++;
      right--;
    }
  }

  read() {
    let currNode = this.head;

    while (currNode !== null) {
      console.log(currNode.val);

      currNode = currNode.next;
    }
  }
}

module.exports = LinkedList;

