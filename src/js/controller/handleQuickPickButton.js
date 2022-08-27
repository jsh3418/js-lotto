import {
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  LOTTO_NUMBER_COUNT,
  LOTTO_PRICE,
} from "../constants/constants.js";
import { lottoStatus } from "../model/model.js";
import { lottoListTemplate, purchaseQuickPickMessage } from "../view/view.js";
import { buyLotto } from "./handleManualPurchaseButton.js";
import { clearInputs, getRandomNumber } from "../util/utils.js";
import { $, $$ } from "../util/DOM.js";
import { renderBuyLottoMessage, renderCurrentMoney } from "./renderText.js";

export const handleQuickPickButton = () => {
  const $$manualNumber = $$(".manual-number");

  if (confirm(purchaseQuickPickMessage(lottoStatus.currentMoney))) {
    buyQuickPickLotto();
    renderCurrentMoney();
    renderBuyLottoMessage();
    clearInputs($$manualNumber);
  }
};

const buyQuickPickLotto = () => {
  while (lottoStatus.currentMoney >= LOTTO_PRICE) {
    buyLotto();
    addQuickPickLotto();
  }
};

const addQuickPickLotto = () => {
  const $lottoIcon = $("#lotto-icon");
  const randomNumbersArray = randomNumbers();
  $lottoIcon.innerHTML += lottoListTemplate(randomNumbersArray.join(", "));
};

const randomNumbers = () => {
  const array = [];
  while (array.length < LOTTO_NUMBER_COUNT) {
    const randomNumber = getRandomNumber(LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER);
    if (!array.includes(randomNumber)) {
      array.push(randomNumber);
    }
  }
  return array;
};
