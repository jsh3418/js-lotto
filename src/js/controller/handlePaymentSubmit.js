import { LOTTO } from "../constants/constants.js";
import { ticket } from "../model/model.js";
import { $ } from "../util/DOM.js";
import {
  buyTicketMessage,
  ticketIconTemplate,
} from "../view/buyTicketMessage.js";

export const handlePaymentSubmit = (event) => {
  event.preventDefault();

  buyTicket();
  paintBuyTicketMessage();
  paintTicketIcon();
};

const buyTicket = () => {
  const $payment = $("#payment-input").value;
  ticket.count = $payment / LOTTO.TICKET_PRICE;
};

const paintBuyTicketMessage = () => {
  const $buyTicketMessage = $("#buy-ticket-message");
  $buyTicketMessage.textContent = buyTicketMessage(ticket.count);
};

const paintTicketIcon = () => {
  const $ticketIcon = $("#ticket-icon");
  $ticketIcon.innerHTML = ticketIconTemplate.repeat(ticket.count);
};
