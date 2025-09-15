//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  
  push(value) {
    const newNode = new Node(value); // Fixed: Added 'new' keyword

    if (!this.head) {
      // Empty list - new node becomes both head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Add to the end
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    this.size++;
  }

  pop() {
    if (!this.tail) {
      return undefined;
    }

    const poppedValue = this.tail.value;
    
    if (this.head === this.tail) {
      // Only one node
      this.head = null;
      this.tail = null;
    } else {
      // Multiple nodes
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    
    this.size--;
    return poppedValue;
  }

  shift() {
    if (!this.head) {
      return undefined; // Empty list
    }
    
    const shiftedValue = this.head.value;
    
    if (this.head === this.tail) {
      // Only one node
      this.head = null;
      this.tail = null;
    } else {
      // Multiple nodes
      this.head = this.head.next;
      this.head.prev = null;
    }
    
    this.size--;
    return shiftedValue;
  }

  unshift(value) {
    const newNode = new Node(value);
    
    if (!this.head) {
      // Empty list - new node becomes both head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Add to the beginning
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    
    this.size++;
  }

  delete(value) {
    let current = this.head;
    
    // Find the node with the specified value
    while (current && current.value !== value) {
      current = current.next;
    }
    
    // If value not found
    if (!current) {
      return;
    }
    
    // If it's the only node
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }
    // If it's the head node
    else if (current === this.head) {
      this.head = current.next;
      this.head.prev = null;
    }
    // If it's the tail node
    else if (current === this.tail) {
      this.tail = current.prev;
      this.tail.next = null;
    }
    // If it's a middle node
    else {
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
    
    this.size--;
  }

  count() {
    return this.size;
  }
}
