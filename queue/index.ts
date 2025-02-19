// Time Complexity: O(1) - enqueue, peek, isEmpty, size, O(n) - dequeue
// Space Complexity: O(n) - where n is the number of items in the queue

// enqueue - add an item to the end of the queue
// dequeue - remove the first added item from the queue and return it and shift the rest of the items to the left
// peek - returns the first added item in the queue without removing it
// size - returns the number of items in the queue
// isEmpty - returns true if the queue is empty

class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items.shift();
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }

  size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

}