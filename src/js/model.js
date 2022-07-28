export const lotto = {
  purchaseAmount: null,
  count: null,
  numbers: [],
};

export const buyLotto = () => {
  lotto.count = lotto.purchaseAmount / 1000;
};
