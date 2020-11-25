const { filterFunc } = require("./filter");

class LinearQu {
  arr = [];
  front = 0;
  rear = 0;
  capacity = 10;

  queue(data) {
    if (this.arr.length > this.capacity) {
      throw Error("Over");
    }
    this.arr[this.rear] = data;
    this.rear++;
  }
  dequeue() {
    if (this.arr.length <= 0) {
      throw Error("End");
    } else {
      const ret = this.arr[this.front];
      delete this.arr[this.front];
      this.arr = filterFunc(this.arr, Boolean);
      return ret;
    }
  }
  show() {
    console.log(this.arr);
  }
}

function quFunc() {
  const linearQu = new LinearQu();
  linearQu.queue(20);
  linearQu.queue(40);
  linearQu.queue(10);
  linearQu.dequeue();
  linearQu.dequeue();
  linearQu.dequeue();

  linearQu.show();
}
quFunc();
