// 출처 https://ko.javascript.info/closure
// 모든 함수는 함수가 생성된 곳의 렉시컬 환경을 기억한다.

function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  }
}

const counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
