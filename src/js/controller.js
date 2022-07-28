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
