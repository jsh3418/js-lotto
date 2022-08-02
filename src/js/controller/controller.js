import { buyLotto } from "../model.js";
import {
  saveLottoPurchaseAmount,
  paintPurchaseInformation,
  lottoNumbering,
  sortNumbers,
  paintLottoIcons,
} from "./service.js";

const $modal = document.querySelector(".modal");
const $lottoIcons = document.querySelector("#lotto-icons");

export const onModalShow = () => {
  $modal.classList.add("open");
};

export const onModalClose = () => {
  $modal.classList.remove("open");
};

export const handlePurchaseAmountForm = (event) => {
  event.preventDefault();
  saveLottoPurchaseAmount();
  buyLotto();
  paintPurchaseInformation();
  lottoNumbering();
  sortNumbers();
  paintLottoIcons();
};

export const handleLottoNumbersToggleButton = () => {
  const $lottoNumbers = document.querySelectorAll(".lotto-numbers");

  if (!$lottoIcons.classList.contains("flex-col")) {
    $lottoIcons.classList.add("flex-col");
    $lottoNumbers.forEach((element) => {
      element.classList.remove("d-none");
    });
  } else {
    $lottoIcons.classList.remove("flex-col");
    $lottoNumbers.forEach((element) => {
      element.classList.add("d-none");
    });
  }
};
