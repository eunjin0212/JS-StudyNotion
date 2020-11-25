class Class {
  //프로퍼티, 메소드
  constructor(name, age) {
    //구성해야하는 틀
    this.name = name;
    this.age = age;
  }
}

const stu = new Class("eunjin", 27);
console.log(stu.name);
console.log(stu.age);
