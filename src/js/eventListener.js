import {
  handlePurchaseAmountForm,
  handleLottoNumbersToggleButton,
} from "./controller.js";

const $purchaseAmountForm = document.querySelector("#purchase-amount-form");
const $lottoNumbersToggleButton = document.querySelector(
  ".lotto-numbers-toggle-button"
);

export const initEventListener = () => {
  $purchaseAmountForm.addEventListener("submit", handlePurchaseAmountForm);
  $lottoNumbersToggleButton.addEventListener(
    "click",
    handleLottoNumbersToggleButton
  );
};
