import { collection, doc, onSnapshot, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useAuth } from "../context/AuthContext";
import { db } from '../config/FirebaseConfig';
 



const BookingPage = () => {

const [getBookingData, setGetBookingData] = useState([])
const { createUser, login, currentUser } = useAuth();




    const getBookings = () =>{

        const q = query(collection(db, "tickets"), where("userID", "==", currentUser.uid));

        const unsub = onSnapshot(q, (snapshot) => {
            let list = []
            snapshot.docs.forEach((doc) => {
                list.push({id: doc.id, ...doc.data() })
            });
            console.log(`LLLLLL ${list}`)
            setGetBookingData(list);
        }, 
        (error) => {
            console.log(error)
        });

        return () => {
            unsub();
        }
    }

    useEffect(() => {
        getBookings();
    }, [])
    
  return (
    <div>
        {
            getBookingData.map(data => {
                return (
                    <div>{data.userID}</div>
                )
            })
        }
    </div>
  )
}

export default BookingPage