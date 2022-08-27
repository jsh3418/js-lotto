import { lottoStatus } from "../model/model.js";
import { $ } from "../util/DOM.js";
import { disabledElement, showElement } from "../util/utils.js";
import { buyLottoMessage, currentMoneyTemplate } from "../view/view.js";
import { renderCurrentMoney } from "./renderText.js";

export const handlePaymentSubmit = (event) => {
  event.preventDefault();
  const $paymentInput = $("#payment-input");
  const $paymentSubmitButton = $("#payment-submit-button");
  const $manualPurchase = $("#manual-purchase");
  const $winningNumberSubmitForm = $("#winning-number-submit-form");
  const $paymentResultSection = $("#payment-result-section");

  disabledElement($paymentInput);
  disabledElement($paymentSubmitButton);

  addMoney();
  renderCurrentMoney();

  showElement($manualPurchase);
  showElement($winningNumberSubmitForm);
  showElement($paymentResultSection);
};

const addMoney = () => {
  const $payment = $("#payment-input").value;
  lottoStatus.payment = Number($payment);
  lottoStatus.currentMoney = Number($payment);
};
