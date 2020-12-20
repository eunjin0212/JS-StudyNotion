class Node {
  data;
  next;
  constructor(data) {
    this.data = data;
  }
}
function addOne(n) {
  return ++n;
}
function addNodeData() {
  return ++n.data;
}

//값을 복사
const val = 1;
console.log(addOne(val));
console.log(val); //왜? 값을 복사해서 넣었기 때문에 val 변수에는 영향을 줄 수 없음
const node = new Node(1);
console.log(node);
console.log(addNodeData(node));
console.log(node); //node.data가 변경됨 왜? Node의 주소값을 복사해서 들어간 것이기 때문에

//Node Premitive type : 원시타입 number, bool, string

//Object type 주소복사
console.log(typeof {});
console.log(typeof []);
console.log(typeof null);
console.log(typeof Node);
console.log(typeof addOne);

//Premitive type 값을 복사
console.log(typeof undefined);
console.log(typeof "");
console.log(typeof 1);
console.log(typeof true);
