import { initApp } from "../index.js";
import { $, $$ } from "../util/DOM.js";
import {
  clearInput,
  clearInputs,
  enabledElement,
  hideElement,
} from "../util/utils.js";
import { onModalClose } from "./resultModal.js";

export const handleInitButton = () => {
  const $paymentInput = $("#payment-input");
  const $$manualNumber = $$(".manual-number");
  const $$winningNumber = $$(".winning-number");
  const $paymentSubmitButton = $("#payment-submit-button");
  const $manualPurchase = $("#manual-purchase");
  const $paymentResultSection = $("#payment-result-section");
  const $winningNumberSubmitForm = $("#winning-number-submit-form");

  clearInput($paymentInput);
  clearInputs($$manualNumber);
  clearInputs($$winningNumber);

  enabledElement($paymentInput);
  enabledElement($paymentSubmitButton);

  hideElement($manualPurchase);
  hideElement($paymentResultSection);
  hideElement($winningNumberSubmitForm);

  initApp();
  onModalClose();
};
