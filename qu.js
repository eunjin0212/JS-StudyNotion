class Qu {
  arr = [];
  first = 0;
  last = 0;
  capacity = 10;

  queue(data) {
    if (this.arr.length > this.capacity) {
      throw new Error("Over capacity");
    }
    this.arr[this.last] = data;
    this.last++;
  }
  dequeue() {
    let data = this.arr[this.first];
    delete this.arr[this.first];
    this.first++;
    return data;
  }
  show() {
    console.log("show " + this.arr);
  }
}
function main() {
  const qu = new Qu();
  qu.queue(10);
  qu.queue(20);
  qu.queue(30);

  qu.dequeue();

  qu.show();
}
main();
