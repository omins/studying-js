// Primitive types
const value1 = typeof undefined;
const value2 = typeof true;
const value3 = typeof "string"; // 문자열이 불변
const value4 = typeof 123;
const value5 = typeof 9007199254740992n; //Number.MAX_SAFE_INTEGER + 1
const value6 = typeof null; // 변수가 아무런 객체를 가리키지 않음
const value7 = typeof Symbol();

console.log(value1);
console.log(value2);
console.log(value3);
console.log(value4);
console.log(value5);
console.log(value6);
console.log(value7);

// 원시값은 불변
let str = "string";
str.toUpperCase(); // "STRING"
console.log(str); // "string"

let upperStr = str.toUpperCase();
console.log(upperStr); // STRING

// 불리언 값
const t = true;
const f = false;

if (t) {
  console.log("This will be executed if const t is true");
}

if (f) {
  console.log("This will never be executed if const f is false");
}

// 참조 타입
// Reference types

const obj = {
  name: "omin",
  weight: "70kg",
};

const arr = [1, 2, 3, 4];
function func() {}

console.log(obj instanceof Object);
console.log(arr instanceof Object);
console.log(func instanceof Object);

// 느슨해서 타입에 많은 신경을 써야 함
obj.phoneNum = "010-1234-5678";
console.log(obj);
// 주소를 갖고 호출만 하고 있음

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// undefined와 null의 차이

typeof null; // "object" (하위호환 유지를 위해 "null"이 아님)
typeof undefined; // "undefined"
null === undefined; // false
null == undefined; // true
null === null; // true
null == null; // true
!null; // true
isNaN(1 + null); // false
isNaN(1 + undefined); // true

// console.log(nullValue); // ReferenceError: nullValue is not defined

const nullValue = null;
console.log(nullValue); // null

let undefinedValue;
console.log(undefinedValue);

// let x;
// if (x === undefined) {
//   console.log("x is undefined");
// } else {
//   console.log(`x is ${x}`);
// }

// Bigint 선언
const withCon = BigInt("9007199254740992");
const withOutCon = 9007199254740992n;

console.log(withCon);
console.log(withOutCon);

const x = 2n ** 53n; // 9007199254740992n
const y = x ** 2n; // 9007199254740993n

// const z = y + 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(y);
const z = Number.parseInt(y);
console.log(z);

// Symbol
const id = Symbol("id");
const id2 = Symbol("id");

const objWithSymbol = {
  name: "omin",
  weight: "70kg",
  [id]: "helloOminId",
};

console.log(objWithSymbol[id]);

console.log(id == id2);
