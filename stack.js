class Stack {
  arr = [];
  top = 0; //현재 테이터가 저장 되어야 하는 배열의 인덱스
  capacity = 10; //데이터 최대 수용 가능한 용량
  push(data) {
    if (this.top > this.capacity) {
      throw new Error("Over capacity");
    }
    this.arr[this.top++] = data;
    //data in
    //1. arr[top] = data;
    //2. top++
  }
  pop() {
    if (this.top <= 0) {
      throw new Error("The End");
      //data out
    }
    return this.arr[--this.top];
  }
  show() {
    console.log(this.arr);
  }
  peek() {
    if (this.top <= 0) {
      throw new Error("No Data");
    }
    console.log(this.arr[this.top - 1]);
  }
}

function main() {
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.show();

  console.log(stack.pop());
  console.log(stack.pop());
  stack.show();
}
main();
