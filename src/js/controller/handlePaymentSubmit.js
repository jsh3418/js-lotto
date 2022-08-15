import { LOTTO } from "../constants/constants.js";
import { lottoStatus } from "../model/model.js";
import { $, $$ } from "../util/DOM.js";
import { getRandomNumber } from "../util/utils.js";
import { buyLottoMessage, lottoIconTemplate } from "../view/view.js";

export const handlePaymentSubmit = (event) => {
  event.preventDefault();

  buyLotto();
  paintBuyLottoMessage();
  paintLottoIcon();
  appendLottoNumbers();
};

const buyLotto = () => {
  const $payment = $("#payment-input").value;
  lottoStatus.count = $payment / LOTTO.PRICE;
};

const paintBuyLottoMessage = () => {
  const $buylottoMessage = $("#buy-lotto-message");
  $buylottoMessage.textContent = buyLottoMessage(lottoStatus.count);
};

const paintLottoIcon = () => {
  const $lottoIcon = $("#lotto-icon");
  $lottoIcon.innerHTML = lottoIconTemplate.repeat(lottoStatus.count);
};

const appendLottoNumbers = () => {
  const $lottoIcons = $$('[data-id="lotto-icons"]');
  $lottoIcons.forEach((element) => {
    const span = document.createElement("span");
    span.dataset.id = "lottoNumbers";
    span.className = "d-none";
    span.textContent = randomNumbers();
    element.append(span);
  });
};

const randomNumbers = () => {
  const array = [];
  while (array.length < LOTTO.WINNING_NUMBER_COUNT) {
    const randomNumber = getRandomNumber(
      LOTTO.MIN_LOTTO_NUMBER,
      LOTTO.MAX_LOTTO_NUMBER
    );

    if (!array.includes((number) => number === randomNumber)) {
      array.push(randomNumber);
    }
  }
  return array.join(", ");
};
