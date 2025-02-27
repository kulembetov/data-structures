// Time Complexity: O(1) - prepend, append, isEmpty, size, O(n) - insert, remove, removeAt, get, indexOf, contains, toArray, toString
// Space Complexity: O(n) - where n is the number of items in the linked list

// size - get the number of elements in the list
// isEmpty - check whether the list is empty
// prepend - add a new element to the beginning of the list
// append - add a new element to the end of the list
// insert - add a new element at a specific index in the list
// remove - remove an element from the list
// removeAt - remove an element at a specific index in the list
// get - get an element at a specific index in the list
// indexOf - get the index of a specific element in the list
// contains - check whether a specific element is present in the list
// clear - remove all elements from the list
// toArray - convert the list to an array
// toString - convert the list to a string

class LinkedListNode<T> {
    public value: T;
    public next: LinkedListNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class LinkedList<T> {
    private head: LinkedListNode<T> | null = null;
    private tail: LinkedListNode<T> | null = null;
    private _size: number = 0;

    public get size(): number {
        return this._size;
    }

    public isEmpty(): boolean {
        return this._size === 0;
    }

    public prepend(value: T): void {
        const newLinkedListNode = new LinkedListNode(value);

        if (this.isEmpty()) {
            this.head = newLinkedListNode;
            this.tail = newLinkedListNode;
        } else {
            newLinkedListNode.next = this.head;
            this.head = newLinkedListNode;
        }

        this._size++;
    }

    public append(value: T): void {
        const newLinkedListNode = new LinkedListNode(value);

        if (this.isEmpty()) {
            this.head = newLinkedListNode;
            this.tail = newLinkedListNode;
        } else {
            this.tail!.next = newLinkedListNode;
            this.tail = newLinkedListNode;
        }

        this._size++;
    }

    public insert(value: T, index: number): boolean {
        if (index < 0 || index > this._size) {
            return false;
        }

        if (index === 0) {
            this.prepend(value);
            return true;
        }

        if (index === this._size) {
            this.append(value);
            return true;
        }

        const newLinkedListNode = new LinkedListNode<T>(value);
        let current = this.head;
        let previous: LinkedListNode<T> | null = null;
        let position = 0;

        while (position < index) {
            previous = current;
            current = current!.next;
            position++;
        }

        newLinkedListNode.next = current;
        previous!.next = newLinkedListNode;
        this._size++;

        return true;
    }

    public remove(value: T): boolean {
        if (this.isEmpty()) return false;

        if (this.head!.value === value) {
            this.head = this.head!.next;
            this._size--;

            if (this.isEmpty()) {
                this.tail = null;
            }

            return true;
        }

        let current = this.head;
        while (current!.next && current!.next.value !== value) {
            current = current!.next;
        }

        if (current!.next) {
            if (current!.next === this.tail) {
                this.tail = current;
            }

            current!.next = current!.next.next;
            this._size--;
            return true;
        }

        return false;
    }

    public removeAt(index: number): T | null {
        if (index < 0 || index >= this._size) {
            return null;
        }

        let removedLinkedListNode: LinkedListNode<T>;

        if (index === 0) {
            removedLinkedListNode = this.head!;
            this.head = this.head!.next;

            if (this.isEmpty()) {
                this.tail = null;
            }
        } else {
            let current = this.head;
            let previous: LinkedListNode<T> | null = null;
            let position = 0;

            while (position < index) {
                previous = current;
                current = current!.next;
                position++;
            }

            removedLinkedListNode = current!;

            if (current === this.tail) {
                this.tail = previous;
            }

            previous!.next = current!.next;
        }

        this._size--;
        return removedLinkedListNode.value;
    }

    public get(index: number): T | null {
        if (index < 0 || index >= this._size) {
            return null;
        }

        let current = this.head;
        let position = 0;

        while (position < index) {
            current = current!.next;
            position++;
        }
        return current!.value;
    }

    public indexOf(value: T): number {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        }

        return -1;
    }

    public contains(value: T): boolean {
        return this.indexOf(value) !== -1;
    }

    public clear(): void {
        this.head = null;
        this.tail = null;
        this._size = 0;
    }

    public toArray(): T[] {
        const array: T[] = [];
        let current = this.head;

        while (current) {
            array.push(current.value);
            current = current.next;
        }

        return array;
    }

    public toString(): string {
        if (this.isEmpty()) {
            return "[]";
        }

        let result = "[";
        let current = this.head;

        while (current) {
            result += `${current.value}${current.next ? ", " : ""}`;
            current = current.next;
        }

        result += "]";
        return result;
    }
}