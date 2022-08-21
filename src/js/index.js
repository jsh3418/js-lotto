import { $ } from "./util/DOM.js";
import { handlePaymentSubmit } from "./controller/handlePaymentSubmit.js";
import { handleNumbersToggleButton } from "./controller/handleNumbersToggleButton.js";
import { handleResultButton } from "./controller/resultModal.js";

const onModalClose = () => {
  const $modal = $(".modal");
  $modal.classList.remove("open");
};

const initEventListener = () => {
  const $showResultButton = $(".open-result-modal-button");
  const $modalClose = $(".modal-close");
  const $lottoNumbersToggleButton = $(".lotto-numbers-toggle-button");
  const $paymentForm = $("#payment-form");

  $showResultButton.addEventListener("click", handleResultButton);
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
