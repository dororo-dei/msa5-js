// 원시형 (Primitive Type)
// let num1 =1;
// let num2 = num1;
// num2 = 99;

// console.log(num1,num2);

// 참조형 (Reference Type)
let obj1 = {id: 1, name: '둘리', etc: {addr: '대구', test: {key1: 'val1'}}};
// let obj2 = obj1;
// obj2.name = '홍길동';

// console.log(obj1.name, obj2.name);
// 내가 직접 값을 가지고 있는게 아닌 어딘가에 저장되어있는 값을 참조한다

// ============================================================

// 얕은 복사 (Shallow copy)
// 객체의 최상위 계층만 값을 복사하고, 그 이하 계층은 참조형 데이터일 경우 주소만 복사하는 방식
// let obj3 = {...obj1} // spread 문법
// obj3.name = '또치';
// obj3.etc.addr = '서울';
// console.log(obj1.name, obj3.name, obj1.etc.addr, obj3.etc.addr);

// 깊은 복사 (Deep Copy)
// 객체의 모든 계층의 값을 복사
obj1 = {id: 1, name: '둘리', etc: {addr: '대구'}};
// let obj4 = JSON.stringify(obj1);
let obj4 = JSON.parse(JSON.stringify(obj1));
obj4.name = '또치';
obj4.etc.addr = '서울';
console.log(obj1.name, obj4.name, obj1.etc.addr, obj4.etc.addr);
