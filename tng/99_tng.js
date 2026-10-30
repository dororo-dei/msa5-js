// 1. 각 버튼 상수 생성
const nextBtn = document.querySelector(".next-btn");
const resetBtn = document.querySelector(".reset-btn");
const cardContainer = document.querySelector(".card-container")

// 2. 페이지와 카드 초기 설정 값
let page = 0;
const limit = 3;


nextBtn.addEventListener("click", async (e)=>{
  // console.log(page);
  page++;

  // 3. 사용하는 API
  const baseURL = 'https://picsum.photos';
  const path = '/v2/list';

  // 4. URL 만들기
  const url = `${baseURL}${path}?page=${page}&limit=${limit}`;

  // 5. trycatch문으로 예외처리
  try{
    await sleep();
    const response = await axios.get(url);
    
    // 초기화 버튼 누르기 전 기존 카드 삭제 x

    response.data.forEach((item)=>{
      // 6-1. card-img 요소 생성
      const cardImg = document.createElement('div');
      cardImg.classList.add('card-img');
      cardImg.style.backgroundImage = `url('${item.download_url}')`;

      // 6-2. card-text 요소 생성
      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.textContent = `${item.id}${item.author}`;

      // 6-3. card 요소 생성
      const card = document.createElement('div');
      card.classList.add('card');
      card.appendChild(cardImg);
      card.appendChild(cardText);

      // 6-4. card-container에 생성한 요소 담기

      cardContainer.appendChild(card);
    })
    
    // console.log(page);
  }catch(error){
    console.error(error);
  }
})

resetBtn.addEventListener("click",(e)=>{
  try{
    cardContainer.textContent = "";
    page = 0; // 페이지 번호 초기화
  }catch(error){
    console.error(error);
  }
})


function sleep() {
  return new Promise(resolve => {
    setTimeout(() => resolve(), 1000);
  })
}