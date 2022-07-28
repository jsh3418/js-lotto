import { handlePurchaseAmountForm } from "./controller.js";

const $purchaseAmountForm = document.querySelector("#purchase-amount-form");

export const initEventListener = () => {
  $purchaseAmountForm.addEventListener("submit", handlePurchaseAmountForm);
};
