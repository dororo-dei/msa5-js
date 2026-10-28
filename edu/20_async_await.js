const timer = (str, ms = 500) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(str);

      if (str === "A" || str === "B" || str === "C") {
        resolve({ code: "허용", word: str }); // 객체형태로 전달
      } else {
        reject(new Error("허용하지 않는 문자가 입력됐다.")); // 보통 에러 객체
      }
    }, ms);
  });
};

// 함수를 정의할 때 항상 async라는 함수가 있어야한다
const process = async () => {
  try {
    const result1 = await timer("A");
    // timer가 비동기 처리. 이 비동기 처리 앞에 await넣음 > resolve나 reject가 되기전 다른 흐름으로 흘러가지 않음
    console.log(result1.code, result1.word);

    const result2 = await timer("B");
    console.log(result2.code, result2.word);

    const result3 = await timer("D");
    // console.log(result3.code, result3.word); <- 얘는 허용하지 않았기 때문에 나오지 않는다
    // 26번이 실행안되고 catch에서 메세지만 출력된다.
  } catch (error) {
    console.log(error.message);
  }
};

process();
// 함수이기 때문에 호출해 줄 것
