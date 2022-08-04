import { collection, doc, onSnapshot, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../config/FirebaseConfig";
import BookingCard from "../../components/CardBooking/BookingCard";

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
        // console.log(snapshot.docs)
        setGetBookingData(list);
      },
      (error) => {
        console.log(error);
      }
    );
      console.log(unsub);
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
        Amount={data.payment}
        NumberOfTicket={data.ticketFormData.ticketAmount}
        TravelDate={data.ticketFormData.date}
      />
    )
  })

  return (
    <div className="body__card">
{/* 
      <BookingCard
        OrderingDate="2-08-2022"
        TicketId="1234"
        Username="Win Ernest"
        NumberPhone="000222000"
        Departure="Kumasi"
        Destination="Accra"
        TimeOfDeparture="Morning 10:30 am"
        Amount="GH20"
        NumberOfTicket="2"
        TravelDate="20-12-2022"
      /> */}

      {getBookingData === null ? "You have No Bookings yet " : Booking}
      {/* <BookingCard/> */}
    </div>
  );
};

export default BookingPage;
