import { lotto, buyLotto } from "./model.js";
import { purchaseInformationTemplate, lottoIconTemplate } from "./view.js";

const $purchaseAmountInput = document.querySelector("#purchase-amount-input");
const $purchaseInformation = document.querySelector("#purchase-information");
const $lottoIcons = document.querySelector("#lotto-icons");

export const handlePurchaseAmountForm = (event) => {
  event.preventDefault();
  lotto.purchaseAmount = $purchaseAmountInput.value;
  buyLotto();
  paintPurchaseInformation();
  paintLottoIcons();
};

const paintPurchaseInformation = () => {
  $purchaseInformation.textContent = purchaseInformationTemplate(lotto.count);
};

const paintLottoIcons = () => {
  for (let i = 0; i < lotto.count; i++) {
    $lottoIcons.innerHTML += lottoIconTemplate();
  }
};
