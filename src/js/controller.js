import { lotto, buyLotto } from "./model.js";
import { purchaseInformationTemplate, lottoIconTemplate } from "./view.js";

const $purchaseAmountInput = document.querySelector("#purchase-amount-input");
const $purchaseInformation = document.querySelector("#purchase-information");
const $lottoIcons = document.querySelector("#lotto-icons");

export const handlePurchaseAmountForm = (event) => {
  event.preventDefault();
  saveLottoPurchaseAmount();
  buyLotto();
  paintPurchaseInformation();
  paintLottoIcons();
  lottoNumbering();
  sortNumbers();
};

const saveLottoPurchaseAmount = () => {
  if (!($purchaseAmountInput.value % 1000 === 0)) {
    alert("로또 구입 금액을 1,000원 단위로 입력해 주세요.");
    return;
  }
  lotto.purchaseAmount = $purchaseAmountInput.value;
};

const paintPurchaseInformation = () => {
  $purchaseInformation.textContent = purchaseInformationTemplate(lotto.count);
};

const paintLottoIcons = () => {
  for (let i = 0; i < lotto.count; i++) {
    $lottoIcons.innerHTML += lottoIconTemplate();
  }
};

const lottoNumbering = () => {
  for (let i = 0; i < lotto.count; i++) {
    lotto.numbers[i] = randomNumber();
  }
};

const randomNumber = () => {
  let numbers = [];
  while (numbers.length < 6) {
    let temp = Math.floor(Math.random() * 45) + 1;
    if (numbers.includes(temp)) continue;
    numbers.push(temp);
  }
  return numbers;
};

const sortNumbers = () => {
  for (let i = 0; i < lotto.numbers.length; i++) {
    lotto.numbers[i].sort((a, b) => {
      return a - b;
    });
  }
};
