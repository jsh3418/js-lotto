import { initEventListener } from "./eventListener.js";

const $showResultButton = document.querySelector(".open-result-modal-button");
const $modalClose = document.querySelector(".modal-close");
const $modal = document.querySelector(".modal");

const onModalShow = () => {
  $modal.classList.add("open");
};

const onModalClose = () => {
  $modal.classList.remove("open");
};

$showResultButton.addEventListener("click", onModalShow);
$modalClose.addEventListener("click", onModalClose);

const init = () => {
  initEventListener();
};

init();
