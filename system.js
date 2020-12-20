class Node {
  data;
  next;
  constructor(data) {
    this.data = data;
  }
  insert(node) {
    //초기화: 값을 넣는다
    this.next = node;
  }
  removeNext() {
    if (!this.next) return;
    const next = this.next;
    this.next = undefined;

    if (next.next) {
      this.next = next.next;
    }
    //next 값을 삭제할 것
  }
  getAll() {
    //현재 노드부터 , next 뒤로 있는 모든 것을 순서대로 출력(재귀함수 사용)
    console.log(this.data);
    if (!this.next) return;
    this.next.getAll();
  }
}
function main() {
  const n1 = new Node(1);
  const n2 = new Node(2);
  n1.insert(n2);

  const n3 = new Node(3);
  n2.insert(n3);

  n1.getAll();
  n1.removeNext();
  n1.getAll();
}
main();
//양방향 리스트 만들기 removeBefore removeAfter 만들기
