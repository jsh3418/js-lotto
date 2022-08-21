import { initApp } from "../index.js";
import { $ } from "../util/DOM.js";
import { clearInput, enabledElement, hideElement } from "../util/utils.js";

export const handleInitButton = () => {
  const $paymentInput = $("#payment-input");
  const $paymentSubmitButton = $("#payment-submit-button");
  const $paymentResultSection = $("#payment-result-section");
  const $winningNumberSubmitForm = $("#winning-number-submit-form");

  clearInput($paymentInput);
  enabledElement($paymentInput);
  enabledElement($paymentSubmitButton);
  hideElement($paymentResultSection);
  hideElement($winningNumberSubmitForm);
  initApp();
  onModalClose();
};

export const onModalClose = () => {
  const $modal = $(".modal");
  $modal.classList.remove("open");
};
