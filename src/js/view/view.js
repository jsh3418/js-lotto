export const buyLottoMessage = (number) => {
  return `총 ${number}개를 구매하였습니다.`;
};

export const lottoListTemplate = (numbers) => `
<li class="d-flex">
  <span data-id="lotto-icons" class="mx-1 text-4xl">🎟️ </span>
  <span data-id="lotto-numbers" class="text-2xl d-none">${numbers}</span>
</li>
`;

export const currentMoneyTemplate = (number) => `현재 남은 금액 : ${number}원`;

export const purchaseQuickPickMessage = (number) => {
  return `남은 잔액은 ${number}입니다. 모두 자동 번호로 구매하시겠습니까?`;
};
