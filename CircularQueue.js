class CircularQueue {
  capacity = 8;
  arr = new Array(8);
  front = 0;
  rear = 0;

  queue(n) {
    if (this.front === this.rear && this.arr[this.front]) {
      throw new Error("Queue is full");
    }

    this.arr[this.rear] = n;
    this.rear = (this.rear + 1) % this.capacity;
    console.log(this.arr);
  }

  dequeue() {
    if (typeof this.arr[this.front] !== "number") {
      throw new Error("Nothing to queue");
    }

    const val = this.arr[this.front];
    delete this.arr[this.front];

    this.front = (this.front + 1) % this.capacity;
    console.log(this.arr);
    return val;
  }
}

const q = new CircularQueue();

q.queue(10);
q.queue(10);
q.queue(10);
q.queue(10);
q.dequeue();
q.dequeue();
q.dequeue();
q.queue(10);
q.queue(10);
q.queue(10);
q.queue(10);
q.queue(10);

console.log(q.arr);
