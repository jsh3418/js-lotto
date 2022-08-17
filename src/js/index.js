import { $ } from "./util/DOM.js";
import { handlePaymentSubmit } from "./controller/handlePaymentSubmit.js";
import { handleNumbersToggleButton } from "./controller/handleNumbersToggleButton.js";
import { onModalClose, onModalShow } from "./controller/resultModal.js";

const initEventListener = () => {
  const $showResultButton = $(".open-result-modal-button");
  const $modalClose = $(".modal-close");
  const $lottoNumbersToggleButton = $(".lotto-numbers-toggle-button");
  const $paymentForm = $("#payment-form");

  $showResultButton.addEventListener("click", onModalShow);
  $modalClose.addEventListener("click", onModalClose);
  $paymentForm.addEventListener("submit", handlePaymentSubmit);
  $lottoNumbersToggleButton.addEventListener(
    "click",
    handleNumbersToggleButton
  );
};

const initApp = () => {
  initEventListener();
};

initApp();
