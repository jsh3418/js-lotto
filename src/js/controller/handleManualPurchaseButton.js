import {
  ERROR_MESSAGE,
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  LOTTO_PRICE,
} from "../constants/constants.js";
import { lottoStatus } from "../model/model.js";
import { $, $$ } from "../util/DOM.js";
import { clearInputs } from "../util/utils.js";
import { lottoListTemplate } from "../view/view.js";
import { renderBuyLottoMessage, renderCurrentMoney } from "./renderText.js";
import { isDuplicateNumbers, isValidRange } from "./validations.js";

export const handleManualPurchaseButton = () => {
  const $$manualNumber = $$(".manual-number");

  if (!isValidRange($$manualNumber, LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER))
    return alert(ERROR_MESSAGE.OUT_OF_RANGE);
  if (isDuplicateNumbers($$manualNumber))
    return alert(ERROR_MESSAGE.DUPLICATE_NUMBERS);

  buyLotto();
  renderCurrentMoney();
  renderBuyLottoMessage();
  addManualLotto();

  clearInputs($$manualNumber);
};

export const buyLotto = () => {
  lottoStatus.currentMoney -= LOTTO_PRICE;
  lottoStatus.count += 1;
};

const addManualLotto = () => {
  const $lottoIcon = $("#lotto-icon");
  const manualNumbers = Array.from($$(".manual-number")).map((number) => {
    return number.value;
  });
  $lottoIcon.innerHTML += lottoListTemplate(manualNumbers.join(", "));
};
