import {
  onModalShow,
  onModalClose,
  handlePurchaseAmountForm,
  handleLottoNumbersToggleButton,
} from "./controller.js";

const $showResultButton = document.querySelector(".open-result-modal-button");
const $modalClose = document.querySelector(".modal-close");
const $purchaseAmountForm = document.querySelector("#purchase-amount-form");
const $lottoNumbersToggleButton = document.querySelector(
  ".lotto-numbers-toggle-button"
);

export const initEventListener = () => {
  $showResultButton.addEventListener("click", onModalShow);
  $modalClose.addEventListener("click", onModalClose);
  $purchaseAmountForm.addEventListener("submit", handlePurchaseAmountForm);
  $lottoNumbersToggleButton.addEventListener(
    "click",
    handleLottoNumbersToggleButton
  );
};
