export const lottoStatus = {
  count: null,
  winningNumbers: [],
  rateOfReturn: null,
};

export const initLottoStatus = () => {
  lottoStatus.count = null;
  lottoStatus.winningNumbers = [];
  lottoStatus.rateOfReturn = null;
};

export const matchNumbers = {
  three: 0,
  four: 0,
  five: 0,
  fiveAndBonusBall: 0,
  six: 0,
};

export const initMatchNumbers = () => {
  matchNumbers.three = 0;
  matchNumbers.four = 0;
  matchNumbers.five = 0;
  matchNumbers.fiveAndBonusBall = 0;
  matchNumbers.six = 0;
};
