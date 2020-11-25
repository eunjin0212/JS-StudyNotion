class Stack {
  arr = [];
  capacity = 10;
  rear = 0;

  push(data) {
    if (this.arr.length > this.capacity) {
      throw Error("Over");
    }
    return (this.arr[this.rear++] = data);
  }
  pop() {
    let data;
    if (this.rear <= 0) {
      throw new Error("End");
    }
    this.arr[--this.rear] = data;
    this.arr.length--;
    return data;
  }
  peek() {
    console.log(this.arr[this.rear - 1]);
  }
  show() {
    if (this.arr.length <= 0) {
      throw Error("없음");
    }
    console.log(this.arr);
  }
}

function stackFunc() {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.show();
  stack.pop();
  stack.show();
}
stackFunc();
