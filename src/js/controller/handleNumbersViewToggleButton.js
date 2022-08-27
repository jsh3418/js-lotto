import { $, $$ } from "../util/DOM.js";
import { toggleFlexColumn } from "../util/utils.js";

export const handleNumbersViewToggleButton = () => {
  const $lottoIcon = $("#lotto-icon");

  toggleFlexColumn($lottoIcon);
  lottoNumbersViewToggle();
};

const lottoNumbersViewToggle = () => {
  const $lottoNumbers = $$('[data-id="lotto-numbers"]');
  $lottoNumbers.forEach((element) => {
    element.classList.toggle("d-none");
  });
};
