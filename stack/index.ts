// Time Complexity: O(1) - push, pop, peek, isEmpty, size, clear
// Space Complexity: O(n) - where n is the number of items in the stack

// push, pop, peek, isEmpty, size, clear
// push - adds a new item to the top of the stack
// pop - removes the top item from the stack and returns it
// peek - returns the top item from the stack without removing it
// isEmpty - returns true if the stack is empty
// size - returns the number of items in the stack
// clear - removes all items from the stack

class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}