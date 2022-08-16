import { $, $$ } from "../util/DOM.js";

export const handleNumbersToggleButton = () => {
  toggleFlexColumn("#lotto-icon");
  lottoNumbersDisplayToggle();
};

const toggleFlexColumn = (element) => {
  $(element).classList.toggle("flex-col");
};

const lottoNumbersDisplayToggle = () => {
  const $lottoNumbers = $$('[data-id="lotto-numbers"]');
  $lottoNumbers.forEach((element) => {
    element.classList.toggle("d-none");
  });
};
