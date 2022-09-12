import { collection, doc, onSnapshot, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../config/FirebaseConfig";
import BookingCard from "../../components/CardBooking/BookingCard";
import NavigationBar from "../../components/Navbar/NavigationBar";
import './Booking.css'
import { Link } from "react-router-dom";

const BookingPage = () => {
  const [getBookingData, setGetBookingData] = useState([]);
  const { createUser, login, currentUser } = useAuth();

  const getBookings = () => {
    const q = query(
      collection(db, "tickets"),
      where("userID", "==", currentUser.uid),orderBy("timeStamp" ,"desc")
    );

    const unsub = onSnapshot(
      q,
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        console.log(list)
        setGetBookingData(list);
      },
      (error) => {
        console.log(error);
      }
    );
      // console.log(unsub);
    return () => {
      unsub();
    };
  };

  useEffect(() => {
    getBookings();
  }, []);

  const Booking = getBookingData.map(data => {
    return (
        <BookingCard
        key={data.id}
        // new Date(user.createdAt._seconds * 1000).toLocaleDateString("en-US")
        OrderingDate={new Date(data.timeStamp.seconds * 1000).toLocaleDateString("en-US")}
        TicketId={data.autoID}
        FirstName={data.ticketFormData.firstName}
        LastName={data.ticketFormData.lastName}
        NumberPhone={data.ticketFormData.phoneNumber}
        Departure={data.ticketFormData.departure}
        Destination={data.ticketFormData.destination}
        TimeOfDeparture={data.ticketFormData.timing}
        HaveLuggage={data.ticketFormData.luggage}
        Amount={data.payment}
        NumberOfTicket={data.ticketFormData.ticketAmount}
        TravelDate={data.ticketFormData.date}
        PaymentId={data.transaction}
        SeatNumber={data.seatNumber}
        CarNumber={data.carNumber}  

      />
    )
  })

  return (
    <div className="">
      <div className="nave">
      <div className="nav-title">You Have {getBookingData.length} Reserve </div>
        <div className="nave-list">
          <Link to={'/'} className="nav-booking">Home</Link>
          <Link to={'/help'} className="nav-help">Help </Link>
        </div>
        </div>


      {getBookingData.length === 0 ? "You have No Bookings yet " : Booking}
    </div>
  );
};

export default BookingPage;
