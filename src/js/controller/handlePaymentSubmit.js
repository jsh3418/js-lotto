import {
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  LOTTO_NUMBER_COUNT,
  LOTTO_PRICE,
} from "../constants/constants.js";
import { lottoStatus } from "../model/model.js";
import { $, $$ } from "../util/DOM.js";
import {
  getRandomNumber,
  disabledElement,
  showElement,
} from "../util/utils.js";
import { buyLottoMessage, lottoListTemplate } from "../view/view.js";

export const handlePaymentSubmit = (event) => {
  event.preventDefault();
  const $paymentInput = $("#payment-input");
  const $paymentSubmitButton = $("#payment-submit-button");
  const $paymentResultSection = $("#payment-result-section");
  const $winningNumberSubmitForm = $("#winning-number-submit-form");

  buyLotto();
  disabledElement($paymentInput);
  disabledElement($paymentSubmitButton);
  showElement($paymentResultSection);
  showElement($winningNumberSubmitForm);
  paintBuyLottoMessage();
  paintLottoIcon();
  appendLottoNumbers();
};

const buyLotto = () => {
  const $payment = $("#payment-input").value;
  lottoStatus.count = Math.floor($payment / LOTTO_PRICE);
};

const paintBuyLottoMessage = () => {
  const $buylottoMessage = $("#buy-lotto-message");
  $buylottoMessage.textContent = buyLottoMessage(lottoStatus.count);
};

const paintLottoIcon = () => {
  const $lottoIcon = $("#lotto-icon");
  $lottoIcon.innerHTML = lottoListTemplate.repeat(lottoStatus.count);
};

const appendLottoNumbers = () => {
  const $lottoIcons = $$('[data-id="lotto-numbers"]');
  $lottoIcons.forEach((element) => {
    element.textContent = randomNumbers();
  });
};

const randomNumbers = () => {
  const array = [];
  while (array.length < LOTTO_NUMBER_COUNT) {
    const randomNumber = getRandomNumber(LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER);

    if (!array.includes(randomNumber)) {
      array.push(randomNumber);
    }
  }
  return array.join(", ");
};
