import { lotto, buyLotto } from "./model.js";
import { purchaseInformationTemplate, lottoIconTemplate } from "./view.js";

const $modal = document.querySelector(".modal");
const $purchaseAmountInput = document.querySelector("#purchase-amount-input");
const $purchaseInformation = document.querySelector("#purchase-information");
const $lottoIcons = document.querySelector("#lotto-icons");

export const onModalShow = () => {
  $modal.classList.add("open");
};

export const onModalClose = () => {
  $modal.classList.remove("open");
};

export const handlePurchaseAmountForm = (event) => {
  event.preventDefault();
  saveLottoPurchaseAmount();
  buyLotto();
  paintPurchaseInformation();
  lottoNumbering();
  sortNumbers();
  paintLottoIcons();
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
    $lottoIcons.innerHTML += lottoIconTemplate(lotto.numbers[i]);
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

export const handleLottoNumbersToggleButton = () => {
  const $lottoNumbers = document.querySelectorAll(".lotto-numbers");

  if (!$lottoIcons.classList.contains("flex-col")) {
    $lottoIcons.classList.add("flex-col");
    $lottoNumbers.forEach((element) => {
      element.classList.remove("d-none");
    });
  } else {
    $lottoIcons.classList.remove("flex-col");
    $lottoNumbers.forEach((element) => {
      element.classList.add("d-none");
    });
  }
};
