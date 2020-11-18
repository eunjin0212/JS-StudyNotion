[공부하러 가기📖](https://www.notion.so/841f77b1f4a44eb1bb468334eb37fc3e)

### 배열 내장 메소드

#### every(function(elem){ 판별함수 return 값 }) : 배열 안에 모든 요소가 주어진 판별 함수를 통과하는지 체크

반환값 : boolean값

    const everyArr = [1, 2, 3, 4, 5];
    function big(elem) {
      return elem < 10;
    }
    console.log(everyArr.every(big)); //true

#### fill(바꿀 요소) : 배열의 시작 인덱스부터 끝 인덱스 이전까지 정적인 값 하나로 채움

반환값 : ✔바뀐 배열

    const fillArr = [1, 2, 3, 4, 5];
    fillArr.fill(1);
    console.log(fillArr); //[1,1,1,1,1]

#### filter(function(elem){ 테스트함수 return 값 }) : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환

반환값 : 테스트를 통과한 요소로 이루어진 ✔배열, 어떤 요소도 테스트를 통과하지 않았다면 ✔빈 배열을 반환

    const filterArr = [1, 2, 3, 4, 5];
    function big2(elem) {
      return elem < 3;
    }
    console.log(filterArr.filter(big2)); //[1,2]

#### find(function(elem){ 판별함수 return 값 }) : 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환

반환값 : 주어진 판별 함수를 만족하는 첫 번째 ✔요소의 값, 그 외에는 ✔undefined

    const findArr = [
    { name: "apple", price: 1000 },
    { name: "banana", price: 2000 },
    { name: "apple", price: 3000 },
    ];
    function findFunc(elem) {
      if (elem.name === "apple") {
        return true;
      }
    }
    console.log(findArr.find(findFunc)); //{ name: 'apple', price: 1000 }

#### findIndex(function(elem){ 판별함수 return 값 }) : 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환

반환값 : 만족하는 요소가 있으면 그 요소의 인덱스 ✔값, 만족하는 요소가 없으면 ✔-1을 반환

      const findIdxArr = [
    { name: "apple", price: 1000 },
    { name: "banana", price: 2000 },
    { name: "orange", price: 3000 },
    ];
    function findIdxFunc(elem) {
      if (elem.name === "box") {
        return true;
      }
    }
    console.log(findIdxArr.findIndex(findIdxFunc)); //-1

#### includes(포함하는지 확인할 요소) : 배열이 특정 요소를 포함하고 있는지 판별

반환값 : boolean값

    const includesArr = [1, 2, 3, 4, 5];
    console.log(includesArr.includes(2)); //true
    console.log(includesArr.includes(6)); //false

#### indexOf(찾을 요소) : 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환

반환값 : 존재하면 첫 번째 ✔인덱스를 반환, 존재하지 않으면 ✔-1 반환

    const indexOfArr = [1, 2, 3, 4, 5, 4];
    console.log(indexOfArr.indexOf(4)); //3

#### flat() : 모든 하위 배열 요소를 지정한 깊이까지 재귀적으로 이어붙임

반환값 : 재귀적으로 ✔이어붙인 새로운 배열을 생성

    const flatArr = [1, 2, [3, 4, [5, [6]]]];
    console.log(flatArr.flat()); //[ 1, 2, 3, 4, [ 5, [ 6 ] ] ]

#### forEach(function(elem){ 함수 내용 return값 }) : 주어진 함수를 배열 요소 각각에 대해 실행

반환값 : undefined

    const forEachArr = [1, 2, 3, 4, "findEach"];
    const Result = forEachArr.forEach(function (elem) {
      console.log(elem);
    });
    //const forEachResult = forEachArr.forEach((elem) => console.log(elem));
    console.log(forEachResult); //1 2 3 4 findEach

#### map(function(elem){ 함수 내용 return 함수리턴값 }) : 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모음

반환값 : 호출한 결과를 모아 ✔새로운 배열을 만든다

    const mapArr = [1, 2, 3, 4, 5];
    const mapResult = mapArr.map(function (elem) {
      const sum = elem + 2;
      return sum;
    });
    console.log(mapResult); //[ 3, 4, 5, 6, 7 ]

#### pop() : 배열에서 마지막 요소를 제거

반환값 : 제거한 ✔요소를 반환

    const popArr = [1, 2, 3, 4, 5];
    console.log(popArr.pop()); //5
    console.log(popArr); //[ 1, 2, 3, 4 ]

#### push(추가할 값) : 배열의 끝에 하나 이상의 요소를 추가

반환값 : 추가 후 새로운 ✔길이를 반환

    const pushArr = [1, 2, 3, 5, 6];
    console.log(pushArr.push(4)); //6

#### reduce(function(acc,cur){ 함수 내용 return 계산값 }) : 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행

반환값 : ✔누적 계산의 결과 값

> 리듀서(reducer) 함수의 네 개의 인자
> *누산기accumulator (acc) : 리듀서 함수의 반환 값은 누산기에 할당
> *현재 값 (cur) : 처리할 현재 요소
> *현재 인덱스 (idx) : 처리할 현재 요소의 인덱스
> *원본 배열 (src) : reduce()를 호출한 배열

    const reduceArr = [1, 2, 3, 4, 5];
    const reduceResult = reduceArr.reduce(function (acc, cur) {
      return acc + cur;
    });
    console.log(reduceResult); //15

#### reduceRight(function(acc,cur){ 함수 내용 return 계산값 }) : 누적기에 대해 함수를 적용하고 배열의 각 값 (✔오른쪽에서 왼쪽으로)은 값을 단일 값으로 줄여야함

반환값 : 누적 계산의 결과를 반환

    const reduceRightArr = [
      [2, 1],
      [4, 3],
      [6, 5],
    ];
    const reduceRightResult = reduceRightArr.reduce(function (acc, cur) {
      return acc.concat(cur);
    });
    console.log(reduceRightResult); //[ 2, 1, 4, 3, 6, 5 ]

#### reverse() : 배열의 순서를 반전 시킴, 첫 번째 요소는 마지막 요소가 되며 마지막 요소는 첫 번째 요소가 됨

반환값 : 순서가 ✔반전된 배열

    const reverseArr = [1, 2, 3, 4, 5];
    console.log(reverseArr.reverse()); //[ 5, 4, 3, 2, 1 ]

#### shift() : 배열에서 첫 번째 요소를 제거함, 배열의 길이를 변하게 함

반환값 : ✔제거된 요소 반환, 빈 배열일 경우 undefinded반환

    const shiftArr = [1, 2, 3, 4, 5];
    console.log(shiftArr.shift()); //1
    console.log(shiftArr); //[ 2, 3, 4, 5 ]

#### slice(startIdx, endIdx) : 배열의 start부터 end까지(end 미포함)에 대한 얕은 복사를 함

반환값 : 얕은 복사본을 새로운 배열 객체로 반환, ✔원본 배열은 바뀌지 않음

    const sliceArr = [1, 2, 3, 4, 5];
    console.log(sliceArr.slice(2, 3)); //[3]
    console.log(sliceArr); //[ 1, 2, 3, 4, 5 ]

#### splice(startIdx, deleteCount, item) : 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가

반환값 : ✔제거한 요소를 담은 배열, 하나의 요소만 제거한 경우 ✔길이가 1인 배열을 반환, 아무 값도 제거하지 않았으면 ✔빈 배열을 반환

> - startIdx : 배열 변경을 시작할 인덱스, 음수일 경우 배열 오른쪽에서 부터 세어나감, 배열 길이보다 크면 그 배열 길이로 설정 됨
> - deleteCount : 삭제할 인덱스, 배열 길이-startIdx < deleteCount 면 시작부터 다 지워짐, 0이면 아무것도 안지움
> - item : 추가할 아이템, 지정하지 않으면 지우기만 함

    const spliceArr = [1, 3, 4];
    spliceArr.splice(1, 0, 2);
    console.log(spliceArr); //[ 1, 2, 3, 4 ]

#### some(function(elem){ 시험 함수 return값 }) : 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트 함

반환값 : 시험 함수에 ✔하나라도 맞는 요소가 있다면 참인(truthy) 값을 반환하는 경우 true, 그 외엔 false

    const someArr = [1, 2, 3, 4];
    const someResult = someArr.some(function (elem) {
      if (elem % 2 === 0) {
        return true;
      }
    });
    console.log(someResult); //true

#### sort(function(){ 정렬 순서를 정하는 함수 return값 }) : 배열의 요소를 적절한 위치에 정렬

반환값 : 정렬한 ✔원래 배열을 반환, 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따름, 복사되는 것 아님

    const sortArr = ["a", "d", "c", "f", "e", "b"];
    sortArr.sort();
    console.log(sortArr); //[ 'a', 'b', 'c', 'd', 'e', 'f' ]

### 객체 내장 메소드

#### entries(obj) : `for...in`와 같은 순서로 주어진 객체 자체의 enumerable(열거, 혹은 셈이 가능한) 속성 [key, value] 쌍의 배열을 반환 (for-in 루프는 프로토 타입 체인의 속성도 열거함)

반환값 : 지정된 객체 자체의 열거 가능한 문자속성 [key, value] 쌍의 배열

    const entriesObj = {
      name1: "jinie",
      age1: 26,
      name2: "eunjin",
      age2: 27,
    };
    console.log(Object.entries(entriesObj));
    /* [
       [ 'name1', 'jinie' ],
       [ 'age1', 26 ],
       [ 'name2', 'eunjin' ],
       [ 'age2', 27 ]
     ]*/

#### keys(obj) : 지정된 객체의 고유 한 열거 가능한 속성 이름 배열을 반환 하며, 일반 루프와 동일한 순서로 반복

반환값 : 주어진 개체의 열거 가능한 모든 속성을 나타내는 문자열 배열

    const keysObj = {
      a: "String",
      b: 27,
      c: true,
    };
    console.log(Object.keys(keysObj)); //[ 'a', 'b', 'c' ]

#### values(obj) : 전달된 파라미터 객체가 가지는 (열거 가능한) 속성의 값들로 이루어진 배열을 리턴, . 이 배열은 for...in 구문과 동일한 순서 (for in 반복문은 프로토타입 체인 또한 열거)

반환값 : 전달된 객체의 속성 값들을 포함하는 배열

    const valuesObj = {
      a: "String",
      b: 27,
      c: true,
    };
    console.log(Object.values(valuesObj)); //[ 'String', 27, true ]

#### assign(복사 할 obj, 복사 받을 obj) : 열거할 수 있는 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사

반환값 : 대상 객체

    const targetObj = { a: 1, b: 3 }; //복사 할 객체
    const sourcesObj = { b: 2, c: 3 }; //복사 받을 객체
    console.log(Object.assign(targetObj, sourcesObj)); //{ a: 1, b: 2, c: 3 } > targetObj 가 바뀜

---

# 문제 1

1-1. 세 값을 입력 받고, 입력한 값 중에 가장 큰 값을 반환하는 함수 만들기

        let a = Math.ceil(Math.random() * 9);
        console.log("a : " + a);
        let b = Math.ceil(Math.random() * 9);
        console.log("b : " + b);
        let c = Math.ceil(Math.random() * 9);
        console.log("c : " + c);

        function max() {
          if (a > b) {
            if (a > c) {
              return "result a : " + a;
            } else {
              return "result c : " + c;
            }
          } else {
            if (b > c) {
              return "result b : " + b;
            } else {
              return "result c : " + c;
            }
          }
        }
        console.log(max());

1-2. 숫자 개수 제한이 없이 입력을 받고, 0을 입력 받으면 지금까지 입력 받은 숫자 중에 가장 큰 숫자를 반환하도록 만들기

    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const arr = [];

    rl.on("line", function (line) {
      const input = Number(line);
      arr.push(input);

      if (input === 0) {
        let max = 0;
        for (let i of arr) {
          max = max < i ? i : max;
        }
        console.log(max);
        rl.close();
      }
    }).on("close", function () {
      process.exit();
    });

# 문제 2

2-1. 1 이상의 자연수 N값을 입력 받으면 1 부터 N까지 수를 더한 값을 반환하는 함수 만들기 - Tip JS에서의 반복 `while`, `for`, `for of`, `for in` `map`등을 사용해 해결할 수 있다. 적절한 방법을 사용해 해결하기

          //for문
         let num = 1;
         for (let i = 0; i < 10; i++) {
           num = num + i;
           console.log(num);
         }
        //while 문
        let x = 0,
          y = 1;
        while (y <= 10) {
          let sum = (x += y);
          y++;
          console.log(sum);
         }


    - 꼬리 문제

        배열과 `map`을 사용해 문제를 해결 해보자.

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const arrMap = arr.map(function (v) {
      return (arr[0] += v);
    });
    console.log(arrMap);

2-2. N을 입력하면 N단을 출력하는 구구단 표를 만들기

    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.on("line", function (line) {
      input = line.split(" ");
      let num = Number(input[0]);
     for (let i = 1; i <= 9; i++) {
        console.log(num * i);
      }
        rl.close();
    }).on("close", function () {
      process.exit();
    });

# 문제 3

3-1. N을 입력 받으면 N층의 피라미드를 만들기

        *
       ***
      *****
     *******
    *********

    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.on("line", function (line) {
      input = line.split(" ");
      const num = Number(input[0]);
      let result = "";

      for (let i = 1; i < num * 2; i += 2) {
        for (let j = 1; j < (num * 2 - i) / 2; j++) {
          result += " ";
        }
        for (let l = 1; l <= i; l++) {
          result += "*";
        }
        for (let k = 1; k < (num * 2 - i) / 2; k++) {
          result += " ";
        }
        result += "\n";
      }
      console.log(result);
      rl.close();
    }).on("close", function () {
      process.exit();
    });

3-2. N을 입력 받으면 아래와 같은 다이아몬드 만들기

        *
       ***
      *****
     *******
    *********
     *******
      *****
       ***
        *
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.on("line", function (line) {
      input = line.split(" ");
      let num = Number(input[0]);
      let result = "";

      for (let i = 1; i < (num * 2) / 2; i += 2) {
        for (let j = 1; j < (num * 2 - i) / 2; j++) {
          result += " ";
        }
        for (let l = 1; l <= i; l++) {
          result += "*";
        }
        for (let k = 1; k < (num * 2 - i) / 2; k++) {
          result += " ";
        }
        result += "\n";
      }
      for (let i = (num * 2 - 1) / 2; i >= 1; i -= 2) {
        for (let j = 1; j < (num * 2 - i) / 2; j++) {
          result += " ";
        }
        for (let l = i; l >= 1; l--) {
          result += "*";
        }
        for (let k = 1; k < (num * 2 - i) / 2; k++) {
          result += " ";
        }
        result += "\n";
      }
      console.log(result);
      rl.close();
    }).on("close", function () {
      process.exit();
    });

3-3. N을 입력 받으면 아래와 같은 문양 만들기

    *********
    **** ****
    ***   ***
    **     **
    *       *
    **     **
    ***   ***
    **** ****
    *********
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.on("line", function (line) {
      input = line.split(" ");
      let num = Number(input[0]);
      let result = "";

      for (let i = 1; i < (num * 2) / 2; i += 2) {
        for (let j = 1; j < (num * 2 - i) / 2; j++) {
          result += "*";
        }
        for (let l = 1; l <= i; l++) {
          result += " ";
        }
        for (let k = 1; k < (num * 2 - i) / 2; k++) {
          result += "*";
        }
        result += "\n";
      }
      for (let i = (num * 2 - 1) / 2; i >= 1; i -= 2) {
        for (let j = 1; j < (num * 2 - i) / 2; j++) {
          result += "*";
        }
        for (let l = i; l >= 1; l--) {
          result += " ";
        }
        for (let k = 1; k < (num * 2 - i) / 2; k++) {
          result += "*";
        }
        result += "\n";
      }
      console.log(result);
      rl.close();
    }).on("close", function () {
      process.exit();
    });
