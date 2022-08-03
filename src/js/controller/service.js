import { purchaseInformationTemplate, lottoIconTemplate } from "../view.js";
import { lotto } from "../model.js";

const $purchaseAmountInput = document.querySelector("#purchase-amount-input");
const $purchaseInformation = document.querySelector("#purchase-information");
const $lottoIcons = document.querySelector("#lotto-icons");

export const saveLottoPurchaseAmount = () => {
  if (!($purchaseAmountInput.value % 1000 === 0)) {
    alert("로또 구입 금액을 1,000원 단위로 입력해 주세요.");
    return;
  }
  lotto.purchaseAmount = $purchaseAmountInput.value;
};

export const paintPurchaseInformation = () => {
  $purchaseInformation.textContent = purchaseInformationTemplate(lotto.count);
};

export const paintLottoIcons = () => {
  lotto.numbers.forEach((_, index) => {
    $lottoIcons.innerHTML += lottoIconTemplate(lotto.numbers[index]);
  });
};

export const lottoNumbering = () => {
  for (let i = 0; i < lotto.count; i++) {
    lotto.numbers[i] = randomNumber();
  }
};

export const randomNumber = () => {
  let numbers = [];
  while (numbers.length < 6) {
    let temp = Math.floor(Math.random() * 45) + 1;
    if (numbers.includes(temp)) continue;
    numbers.push(temp);
  }
  return numbers;
};

export const sortNumbers = () => {
  for (let i = 0; i < lotto.numbers.length; i++) {
    lotto.numbers[i].sort((a, b) => {
      return a - b;
    });
  }
};
