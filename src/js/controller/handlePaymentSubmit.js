import { LOTTO } from "../constants/constants.js";
import { $ } from "../util/DOM.js";
import { buyTicketMessage } from "../view/buyTicketMessage.js";

export const handlePaymentSubmit = (event) => {
  event.preventDefault();

  paintBuyTicketMessage();
};

const paintBuyTicketMessage = () => {
  const $payment = $("#payment-input").value;
  const $buyTicketMessage = $("#buy-ticket-message");

  const ticketCount = $payment / LOTTO.TICKET_PRICE;
  $buyTicketMessage.textContent = buyTicketMessage(ticketCount);
};
