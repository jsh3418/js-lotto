import { $ } from "./util/DOM.js";
import { handlePaymentSubmit } from "./controller/handlePaymentSubmit.js";
import { handleNumbersToggleButton } from "./controller/handleNumbersToggleButton.js";

const $showResultButton = $(".open-result-modal-button");
const $modalClose = $(".modal-close");
const $modal = $(".modal");
const $lottoNumbersToggleButton = $(".lotto-numbers-toggle-button");
const $paymentForm = $("#payment-form");

const onModalShow = () => {
  $modal.classList.add("open");
};

const onModalClose = () => {
  $modal.classList.remove("open");
};

const initEventListener = () => {
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
