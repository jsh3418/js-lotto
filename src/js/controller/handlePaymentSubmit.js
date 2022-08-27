import { lottoStatus } from "../model/model.js";
import { $ } from "../util/DOM.js";
import { disabledElement, showElement } from "../util/utils.js";
import { buyLottoMessage, currentMoneyTemplate } from "../view/view.js";

export const handlePaymentSubmit = (event) => {
  event.preventDefault();
  const $paymentInput = $("#payment-input");
  const $paymentSubmitButton = $("#payment-submit-button");

  disabledElement($paymentInput);
  disabledElement($paymentSubmitButton);

  addMoney();
  renderCurrentMoney();

  showElement($("#manual-purchase"));
};

const addMoney = () => {
  const $payment = $("#payment-input").value;
  lottoStatus.payment = $payment;
  lottoStatus.currentMoney = $payment;
};

export const renderCurrentMoney = () => {
  const $currentMoney = $("#current-money");
  $currentMoney.textContent = currentMoneyTemplate(lottoStatus.currentMoney);
};
export const renderBuyLottoMessage = () => {
  const $buylottoMessage = $("#buy-lotto-message");
  $buylottoMessage.textContent = buyLottoMessage(lottoStatus.count);
};

// const buyLotto = () => {
//   const $payment = $("#payment-input").value;
//   lottoStatus.payment = $payment;
//   lottoStatus.count = Math.floor($payment / LOTTO_PRICE);
// };

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
