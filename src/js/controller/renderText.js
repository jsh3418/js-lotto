import { lottoStatus } from "../model/model.js";
import { $ } from "../util/DOM.js";
import { buyLottoMessage, currentMoneyTemplate } from "../view/view.js";

export const renderCurrentMoney = () => {
  const $currentMoney = $("#current-money");
  $currentMoney.textContent = currentMoneyTemplate(lottoStatus.currentMoney);
};

export const renderBuyLottoMessage = () => {
  const $buylottoMessage = $("#buy-lotto-message");
  $buylottoMessage.textContent = buyLottoMessage(lottoStatus.count);
};
