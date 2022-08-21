import { $ } from "./util/DOM.js";
import { handlePaymentSubmit } from "./controller/handlePaymentSubmit.js";
import { handleNumbersToggleButton } from "./controller/handleNumbersToggleButton.js";
import { handleResultButton } from "./controller/resultModal.js";
import {
  handleInitButton,
  onModalClose,
} from "./controller/handleInitButton.js";
import { initLottoStatus, initMatchNumbers } from "./model/model.js";

const initEventListener = () => {
  const $showResultButton = $(".open-result-modal-button");
  const $modalClose = $(".modal-close");
  const $lottoNumbersToggleButton = $(".lotto-numbers-toggle-button");
  const $paymentForm = $("#payment-form");
  const $resetButton = $("#reset-button");

  $showResultButton.addEventListener("click", handleResultButton);
  $modalClose.addEventListener("click", onModalClose);
  $paymentForm.addEventListener("submit", handlePaymentSubmit);
  $lottoNumbersToggleButton.addEventListener(
    "click",
    handleNumbersToggleButton
  );
  $resetButton.addEventListener("click", handleInitButton);
};

export const initApp = () => {
  initEventListener();
  initLottoStatus();
  initMatchNumbers();
};

initApp();
