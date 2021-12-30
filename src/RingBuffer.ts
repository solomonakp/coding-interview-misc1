/**
 * Implement a class named ring buffer with fixed capacity such that
 *
 * constructor: takes the capacity for the ring buffer
 *
 * push: adds a value to the ring buffer.
 * pop: removes the last value from the ring buffer or undefined if it's empty.
 * peek: returns the current value of the most recent value added or undefined if none have been added
 *
 * If we have too many values (exceeding capacity) the oldest values are lost.
 *
 * The ordering of the push operations must be kept.
 */
export class RingBuffer<T> {
  maxSize: number;

  list: any[];

  constructor(capacity: number) {
    this.maxSize = capacity;
    this.list = [];
  }

  public push(value: T) {
    // check if list is full

    if (this.list.length < this.maxSize) {
      this.list.push(value);
    } else {
      if (this.list.length === this.maxSize) {
        this.list.shift();
        this.list.push(value);
      }
    }

    //   if list is full remove last from list
    // add current value to list
  }

  public peek(): T | undefined {
    const value = this.list[this.list.length - 1];

    return value;
  }

  public pop(): T | undefined {
    const value = this.list.pop();
    // not implemented
    return value;
  }
}
