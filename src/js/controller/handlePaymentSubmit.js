import { LOTTO } from "../constants/constants.js";
import { lottoStatus } from "../model/model.js";
import { $ } from "../util/DOM.js";
import { buyLottoMessage, lottoIconTemplate } from "../view/buyLottoMessage.js";

export const handlePaymentSubmit = (event) => {
  event.preventDefault();

  buyLotto();
  paintBuyLottoMessage();
  paintLottoIcon();
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
