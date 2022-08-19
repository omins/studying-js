// 출처 https://ko.javascript.info/closure
// inBetween(a, b)
// inArray([...])
// arr.filter(inBetween(3, 6)) => 3과 6 사이 값만 반환
// arr.filter(inArray([1, 2, 3])) => [1,2,3] 안에 있는 값과 일치하는 값만 반환

function inBetween(a, b) {
  return function(x) {
    return a <= x && x <= b;
  }
}

function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2