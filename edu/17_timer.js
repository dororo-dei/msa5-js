// 타이머 함수

// setTimeout(cb,ms[,...args]): number
// 설정한 일정 시간 후에 콜백함수를 실행
// 콜백 함수에 파라미터가 필요한 경우에만 ...args를 추가
// return값은 timeoutId(), 정수값을 반환 (해당 타이머의 고유한 식별값)

console.log("A");
const timeoutId = setTimeout(() => {
  console.log("B");
}, 1000);
// 1초는 1000ms
console.log("C");
// 결과: A>C>B // 이렇게 동작하는 것을 비동기 처리라고한다

// 해당 ID의 setTimeout을 취소 시킨다.
clearTimeout(timeoutId);

// setInterval(cb, ms{,...args}):number
// 콜백함수, 타임, 콜백함수의 아규먼트가 있을경우 아규먼트
// 설정한 일정 시간마다 콜뱀함수를 실행
// return값은 intervalId(), 정수값을 반환 (해당 인터벌의 고유한 식별값)
const intervalId = setInterval(() => {
  console.log("인터벌");
  //   clearInterval(intervalId);
}, 1000);
// => 불법사이트의 반짝반짝 효과를 만든다. 성능 많이 잡아먹는다. interval 보다 setTimer많이사용.
// 슬라이드 이미지 이동시킬때 인터벌 사용

// 1초가 되면 취소가 되니까
setTimeout(() => {
  clearInterval(intervalId);
}, 6000);
// 자바스크립트의 비동기 처리는 웹API라는 영역에 대리를 맡기다보니 통신하는 시간의 오차범위가 생김, 그 오차범위만큼 딜레이가 미세하게 생기고 그 딜레이는 누적될 가능성이 높다.
