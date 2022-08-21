import { $, $$ } from "../util/DOM.js";
import { lottoStatus, matchNumbers } from "../model/model.js";
import {
  FIVE_AND_BONUS_MATCH_REWARD,
  FIVE_MATCH,
  FIVE_MATCH_REWARD,
  FOUR_MATCH,
  FOUR_MATCH_REWARD,
  SIX_MATCH,
  SIX_MATCH_REWARD,
  THREE_MATCH,
  THREE_MATCH_REWARD,
} from "../constants/constants.js";

export const handleResultButton = () => {
  setWinningNumbers();
  checkMatchingWinningNumbers();
  showRankCount();
  calculateRateOfReturn();
  showRateOfReturn();
  onModalShow();
};

const setWinningNumbers = () => {
  const winningNumbers = $$(".winning-number");
  winningNumbers.forEach((number, index) => {
    lottoStatus.winningNumbers[index] = number.value;
  });
};

const checkMatchingWinningNumbers = () => {
  const lottoNumbers = $$('[data-id="lotto-numbers"]');
  lottoNumbers.forEach((number) => {
    const lottoNumber = number.textContent.split(", ");
    const matchNumberCount = lottoNumber.filter((number) =>
      lottoStatus.winningNumbers.includes(number)
    ).length;

    if (matchNumberCount === THREE_MATCH) {
      matchNumbers.three++;
      return;
    }
    if (matchNumberCount === FOUR_MATCH) {
      matchNumbers.four++;
      return;
    }
    if (matchNumberCount === FIVE_MATCH) {
      const bonusNumber = $(".bonus-number").value;
      if (lottoNumber.includes(bonusNumber)) {
        matchNumbers.fiveAndBonusBall++;
        return;
      }
      matchNumbers.five++;
      return;
    }
    if (matchNumberCount === SIX_MATCH) {
      matchNumbers.six++;
      return;
    }
  });
};

const showRankCount = () => {
  $("#three-matches").textContent = `${matchNumbers.three}개`;
  $("#four-matches").textContent = `${matchNumbers.four}개`;
  $("#five-matches").textContent = `${matchNumbers.five}개`;
  $("#five-bonus-matches").textContent = `${matchNumbers.fiveAndBonusBall}개`;
  $("#six-matches").textContent = `${matchNumbers.six}개`;
};

const calculateRateOfReturn = () => {
  const totalReward =
    matchNumbers.three * THREE_MATCH_REWARD +
    matchNumbers.four * FOUR_MATCH_REWARD +
    matchNumbers.five * FIVE_MATCH_REWARD +
    matchNumbers.fiveAndBonusBall * FIVE_AND_BONUS_MATCH_REWARD +
    matchNumbers.six * SIX_MATCH_REWARD;

  const result =
    ((totalReward - lottoStatus.count * 1000) / (lottoStatus.count * 1000)) *
    100;

  return result.toLocaleString();
};

const showRateOfReturn = () => {
  const rateOfReturn = $("#rate-of-return");
  rateOfReturn.textContent = `당신의 총 수익률은 ${calculateRateOfReturn()}%입니다.`;
};

const onModalShow = () => {
  const $modal = $(".modal");
  $modal.classList.add("open");
};
