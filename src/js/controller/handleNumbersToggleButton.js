import { $, $$ } from "../util/DOM.js";

export const handleNumbersToggleButton = () => {
  lottoNumbersDisplayToggle();
};

const lottoNumbersDisplayToggle = () => {
  const $lottoNumbers = $$('[data-id="lotto-numbers"]');
  $lottoNumbers.forEach((element) => {
    element.classList.toggle("d-none");
  });
};
