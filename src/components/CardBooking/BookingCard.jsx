import React from "react";
import "./BookingCard.css";

const BookingCard = ({
  OrderingDate,
  TicketId,
  FirstName,
LastName,
  NumberPhone,
  Departure,
  Destination,
  Amount,
  TimeOfDeparture,
  NumberOfTicket,
  TravelDate,
  HaveLuggage,
  PaymentId,
  SeatNumber,
CarNumber,
}) => {
//   setNumber
// carNumber
  return (
    <div className="container">
      <div className="card__container">
        <div>Order Ticket Date ::: {OrderingDate}</div>
        <div>Ticket ID ::: {TicketId}</div>
        <div>Full name ::: {FirstName} {LastName}</div>
        <div>Phone Number ::: {NumberPhone}</div>
        <div>Place of Departure ::: {Departure}</div>
        <div>Place of Destination ::: {Destination}</div>
        <div>Amount ::: {Amount}</div>
        <div>Number of Ticket ::: {NumberOfTicket}</div>
        <div>Time of Departure ::: {TimeOfDeparture} </div>
        <div>Have a Luggage ::: {HaveLuggage} </div>
        <div>Travel Date ::: {TravelDate}</div>
        <div>Payment ID ::: {PaymentId}</div>
        <div>Seat Number ::: {SeatNumber}</div>
        <div>Car Number ::: {CarNumber}</div>
      </div>
    </div>
  );
};

export default BookingCard;
