export const purchaseInformationTemplate = (count) => {
  return `총 ${count}개를 구매하였습니다.`;
};

export const lottoIconTemplate = (lottoNumbers) => {
  return `
  <li>
    <span class="mx-1 text-4xl">🎟️</span>
    <span class="lotto-numbers d-none">${lottoNumbers}</span>
  </li>
  `;
};
