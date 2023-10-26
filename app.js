const textArray = [
  "💌 항상 솔직하고 당찬 무늬님!!! 💌",
  "그동안 정말 고생 많으셨어요",
  "어제 먼가 사무실에서 봤을 때 떠나시는게 실감이 나더라구여",
  "손편지도 주시고 감동이었어요ㅠㅠ고이 간직하겠습니다",
  "운영 이슈로 m1 갈 시간도 없어서 아쉬웠습니다... 담주에 꼭 같이 가여!!",
  "어디서 무얼 하든 잘 해낼 거라 믿습니당 화이팅"
];

let textIndex = 0;
let charIndex = 0;
const speed = 70;

function typeLine() {
  const element = document.getElementById("from-jaewan");

  if (textIndex < textArray.length) {
    if (charIndex < textArray[textIndex].length) {
      element.innerHTML += textArray[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeLine, speed);
    } else {
      textIndex++;
      charIndex = 0;
      element.innerHTML += "<br />";
      setTimeout(typeLine, speed);
    }
  }
}

window.onload = typeLine;
