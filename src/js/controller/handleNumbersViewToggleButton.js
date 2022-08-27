import { $$ } from "../util/DOM.js";
import { toggleFlexColumn } from "../util/utils.js";

export const handleNumbersViewToggleButton = () => {
  toggleFlexColumn("#lotto-icon");
  lottoNumbersViewToggle();
};

const lottoNumbersViewToggle = () => {
  const $lottoNumbers = $$('[data-id="lotto-numbers"]');
  $lottoNumbers.forEach((element) => {
    element.classList.toggle("d-none");
  });
};
