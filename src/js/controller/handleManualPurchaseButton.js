import {
  ERROR_MESSAGE,
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  LOTTO_PRICE,
} from "../constants/constants.js";
import { lottoStatus } from "../model/model.js";
import { $, $$ } from "../util/DOM.js";
import { clearInputs, showElement } from "../util/utils.js";
import { lottoListTemplate } from "../view/view.js";
import {
  renderBuyLottoMessage,
  renderCurrentMoney,
} from "./handlePaymentSubmit.js";
import { isValidRange } from "./validations.js";

export const handleManualPurchaseButton = () => {
  if (!isValidRange($$(".manual-number"), LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER))
    return alert(ERROR_MESSAGE.OUT_OF_RANGE);

  showElement($("#payment-result-section"));

  buyLotto();
  renderCurrentMoney();
  renderBuyLottoMessage();
  addManualLotto();

  clearInputs($$(".manual-number"));
};

export const buyLotto = () => {
  lottoStatus.currentMoney -= LOTTO_PRICE;
  lottoStatus.count += 1;
};

export const addManualLotto = () => {
  const $lottoIcon = $("#lotto-icon");
  const manualNumbers = Array.from($$(".manual-number")).map((number) => {
    return number.value;
  });
  $lottoIcon.innerHTML += lottoListTemplate(manualNumbers.join(", "));
};
