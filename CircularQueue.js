const { filterFunc } = require("./filter");
class CircularQueue {
  constructor() {
    this.maxQueueSize = 5;
    this.arr = [];
    this.front = 0;
    this.rear = 0;
  }

  empyt() {
    return this.front === this.rear;
  }
  full() {
    return (this.rear + 1) % this.maxQueueSize === this.front;
  }
  queue(data) {
    if (this.full()) {
      throw Error("Over");
    }
    this.arr[(this.rear = (this.rear + 1) % this.maxQueueSize)] = data;
    this.arr = filterFunc(this.arr, Boolean);
    return data;
  }
  deQueue() {
    if (this.empyt()) {
      throw new Error("End");
    } else {
      let ret = this.arr[(this.front = (this.front + 1) % this.maxQueueSize)];
      delete this.arr[(this.front = (this.front - 1) % this.maxQueueSize)];
      this.front++;
      this.arr = filterFunc(this.arr, Boolean);
      return ret;
    }
  }
  show() {
    console.log(this.arr);
  }
}
function circularQuFunc() {
  const circularQu = new CircularQueue();
  circularQu.full();
  circularQu.queue(20);
  circularQu.queue(7);
  circularQu.queue(100);
  circularQu.queue;
  circularQu.show();
  circularQu.deQueue();
  circularQu.show();
}
circularQuFunc();
