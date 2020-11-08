class Qu {
  arr = [];
  rear = 0;
  capacity = 10;
  queue(data) {
    if (this.arr.length > this.capacity) {
      throw new Error("Over capacity");
    }
    this.arr[this.rear++] = data;
  }
  dequeue() {
    if (this.arr.length <= 0) {
      throw new Error("The End");
    }
    return this.arr.shift();
  }
  show() {
    console.log(this.arr);
  }
}
function main() {
  const qu = new Qu();
  qu.queue(10);
  qu.queue(20);
  qu.queue(30);
  qu.show();

  console.log(qu.dequeue());
  console.log(qu.dequeue());
  console.log(qu.dequeue());
}
main();
