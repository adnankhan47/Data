// models/payment.js
class Payment {
  constructor(id, bookingId, amount, paymentMethod, paymentStatus) {
    this.id = id; // Unique identifier for the payment
    this.bookingId = bookingId; // Identifier for the related booking
    this.amount = amount; // Amount paid
    this.paymentMethod = paymentMethod; // Payment method (e.g., Credit Card)
    this.paymentStatus = paymentStatus; // Status of the payment (e.g., Completed, Pending)
  }
}

module.exports = Payment;
