//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(items = []) {
    this.items = [...items];
  }

  get values() {
    return this.items;
  }

  append(other) {
    const result = [];
  
    // Add all items from current list
    let i = 0;
    while (this.items[i] !== undefined) {
      result[i] = this.items[i];
      i++;
    }
    
    // Add all items from other list
    let j = 0;
    while (other.items[j] !== undefined) {
      result[i + j] = other.items[j];
      j++;
    }
    
    return new List(result);
  }

  concat(lists) {
    const result = [];
    let resultIndex = 0;
    
    // Add all items from current list first
    let i = 0;
    while (this.items[i] !== undefined) {
      result[resultIndex] = this.items[i];
      resultIndex++;
      i++;
    }
    
    // Add all items from each list in the array
    let listIndex = 0;
    while (lists.items[listIndex] !== undefined) {
      const currentList = lists.items[listIndex];
      let itemIndex = 0;
      while (currentList.items[itemIndex] !== undefined) {
        result[resultIndex] = currentList.items[itemIndex];
        resultIndex++;
        itemIndex++;
      }
      listIndex++;
    }
    
    return new List(result);
  }

  filter(predicate) {
    const result = [];
    let resultIndex = 0;
    let i = 0;
    
    while (this.items[i] !== undefined) {
      if (predicate(this.items[i])) {
        result[resultIndex] = this.items[i];
        resultIndex++;
      }
      i++;
    }
    
    return new List(result);
  }

  map(fn) {
    const result = [];
    let i = 0;
    
    while (this.items[i] !== undefined) {
      result[i] = fn(this.items[i]);
      i++;
    }
    
    return new List(result);
  }

  length() {
    return this.items.length;
  }

  foldl(fn, acc) {
    let accumulator = acc;
    let i = 0;
    
    while (this.items[i] !== undefined) {
      accumulator = fn(accumulator, this.items[i]);
      i++;
    }
    
    return accumulator;
  }

  foldr(fn, acc) {
    let accumulator = acc;
    
    // First, find the length to iterate backwards
    let length = 0;
    while (this.items[length] !== undefined) {
      length++;
    }
    
    // Iterate from right to left
    for (let i = length - 1; i >= 0; i--) {
      accumulator = fn(accumulator, this.items[i]);
    }
    
    return accumulator;
  }

  reverse() {
    const result = [];
    
    // Find the length first
    let length = 0;
    while (this.items[length] !== undefined) {
      length++;
    }
    
    // Copy items in reverse order
    for (let i = 0; i < length; i++) {
      result[i] = this.items[length - 1 - i];
    }
    
    return new List(result);
  }
}
