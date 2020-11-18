class LinearQu {
  arr = [];
  front = 0;
  rear = 0;
  capacity = 10;

  queue(data) {
    if (this.arr.length > this.capacity) {
      throw new Error("Over capacity");
    }
    this.arr[this.rear] = data;
    this.rear++;
  }
  dequeue() {
    let data = this.arr[this.front];
    delete this.arr[this.front];
    this.front++;
    return data;
  }
  show() {
    console.log("show " + this.arr);
  }
}
function quMain() {
  const linearQu = new LinearQu();
  linearQu.queue(10);
  linearQu.queue(20);
  linearQu.queue(30);

  linearQu.dequeue();

  linearQu.show();
}
//quMain();

class CircularQueue {
  constructor() {
    this.maxQueueSize = 7;
    this.array = [];
    this.front = 0;
    this.rear = 0;
  }
  Empyt() {
    return this.front === this.rear;
  }
  Full() {
    return (this.rear + 1) % this.maxQueueSize === this.front;
  }
  Queue(data) {
    if (this.Full()) {
      throw new Error("Over capacity");
    } else {
      this.array[(this.rear = (this.rear + 1) % this.maxQueueSize)] = data;
      return this.array;
    }
  }
  DeQueue() {
    if (this.Empyt()) {
      throw new Error("Queue is Empty");
    } else {
      let item = this.array[
        (this.front = (this.front + 1) % this.maxQueueSize)
      ];
      delete this.array[this.front % this.maxQueueSize];
      return item;
    }
  }
  ShowQu() {
    console.log(this.array);
  }
}
function circularMain() {
  const circularQueue = new CircularQueue();
  circularQueue.Queue(1);
  circularQueue.Queue(2);
  circularQueue.Queue(3);
  circularQueue.Queue(4);
  circularQueue.Queue(5);
  circularQueue.Queue(6);

  circularQueue.ShowQu();

  circularQueue.DeQueue();
  circularQueue.DeQueue();
  circularQueue.DeQueue();
  circularQueue.DeQueue();

  circularQueue.ShowQu();
}
circularMain();
