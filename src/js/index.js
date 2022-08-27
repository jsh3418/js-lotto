import { $ } from "./util/DOM.js";
import { handlePaymentSubmit } from "./controller/handlePaymentSubmit.js";
import { handleNumbersViewToggleButton } from "./controller/handleNumbersToggleButton.js";
import { handleResultButton, onModalClose } from "./controller/resultModal.js";
import { handleInitButton } from "./controller/handleInitButton.js";
import { initLottoStatus, initMatchNumbers } from "./model/model.js";
import { handleManualPurchaseButton } from "./controller/handleManualPurchaseButton.js";
import { handleQuickPickButton } from "./controller/handleQuickPickButton.js";

const initEventListener = () => {
  const $showResultButton = $(".open-result-modal-button");
  const $modalClose = $(".modal-close");
  const $lottoNumbersToggleButton = $(".lotto-numbers-toggle-button");
  const $paymentForm = $("#payment-form");
  const $initButton = $("#init-button");
  const $manualPurchaseButton = $("#manual-purchase-button");
  const $quickPickButton = $("#quick-pick-button");

  $showResultButton.addEventListener("click", handleResultButton);
  $modalClose.addEventListener("click", onModalClose);
  $paymentForm.addEventListener("submit", handlePaymentSubmit);
  $lottoNumbersToggleButton.addEventListener(
    "click",
    handleNumbersViewToggleButton
  );
  $initButton.addEventListener("click", handleInitButton);
  $manualPurchaseButton.addEventListener("click", handleManualPurchaseButton);
  $quickPickButton.addEventListener("click", handleQuickPickButton);
};

export const initApp = () => {
  initEventListener();
  initLottoStatus();
  initMatchNumbers();
};

initApp();
