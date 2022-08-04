import "./TicketFrom.css";

import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../config/FirebaseConfig";
import {
  accra,
  bolgatanga,
  capeCoast,
  dambai,
  damongo,
  goaso,
  hoT,
  koforidua,
  kumasi,
  nalerigu,
  sunyani,
  takoradi,
  tamale,
  techiman,
  waT,
  wiawso,
} from "../../config/regionData";

import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
 
function App() {
  const [ticketFormData, setTicketFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    destination: "",
    departure: "",
    timing: "",
    ticketAmount: 1,
    date: 0,
  });

  const [totalAmount, setTotalAmount] = useState(0);
  const [showError, setShowError] = useState("")

  let navigate = useNavigate();

  const { currentUser } = useAuth();

  // console.log(ticketFormData.destination === "Sunyani" && true);
  // console.log(ticketFormData.destination === "Sunyani" && true);

  const computingForPrice = () => {
    if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === kumasi &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    //Sunyani to ******************************
    else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === sunyani &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    //techiman *******************************************
    else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === techiman &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    // goaso *******************************************
    else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === goaso &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    ///capeCoast**************************
    else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === capeCoast &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    ///koforidua*******************************************
    else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === koforidua &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    ///accra***********************************************
    else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === accra &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    ///tamale***************************************
    else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === tamale &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    //damongo*************************************************
    else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === damongo &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    // nalerigu**************************************************
    else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === nalerigu &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    //// bolgatanga**************************************
    else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === bolgatanga &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    //// Wa ************************************************
    else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === waT &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    // ho **********************************************
    else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === hoT &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    /// dambai *************************************
    else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === dambai &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    // takoradi *************************************************
    else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === takoradi &&
      ticketFormData.destination === wiawso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }

    // wiawso *****************************************
    else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === kumasi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === techiman
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === goaso
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === capeCoast
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === koforidua
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === accra
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === tamale
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === damongo
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === nalerigu
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === bolgatanga
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === waT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === hoT
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === dambai
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === takoradi
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    } else if (
      ticketFormData.departure === wiawso &&
      ticketFormData.destination === sunyani
    ) {
      setTotalAmount(10 * ticketFormData.ticketAmount);
    }
  };

  const checkDate = () => {
    const d = new Date();
    console.log(`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`);
    console.log(ticketFormData.date);

    if (
      `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}` ===
      ticketFormData.date
    ) {
      console.log("Errroorrr");
    } else {
      console.log("Good");
    }
  };

  useEffect(() => {
    computingForPrice();
    // checkDate()
    //d.getDate()
    console.log(currentUser)
  }, [
    ticketFormData.departure,
    ticketFormData.destination,
    ticketFormData.ticketAmount,
  ]);

  const addOn = async (event) => {
    event.preventDefault()
    // await setDoc(doc(db, "users", "a"), {
    //   love: "game",
    //   Hey: "Hart",
    //   Go: "Hi",
    //   timeStamp: serverTimestamp(),
    // });

    // const autoID = "1234567890"

    // let  serial = ""
    // for (let i = 0; i < autoID.length; i++  ){
    //   let rand = Math.floor(Math.random * autoID.length);
    //   serial += autoID[rand]
    // }

    // firstName: "",
    // lastName: "",
    // phoneNumber: "",
    // destination: "",
    // departure: "",
    // timing: "",
    // ticketAmount: 1,
    // date: 0,
    if(
    ticketFormData.firstName === "" || ticketFormData.lastName === "" 
    || ticketFormData.phoneNumber === "" || ticketFormData.destination === "" 
    || ticketFormData.departure === "" || ticketFormData.timing === "" 
    || ticketFormData.date === 0 || ticketFormData.ticketAmount === 0)
    {
      setShowError("Please Make Sure to Fill the Forms")
    }
    else{
      
      let serial = Math.floor(Math.random() * 10000000000) + 1;
  
      const docRef = await addDoc(collection(db, "tickets"), {
        ticketFormData,
        payment: totalAmount,
        autoID: serial,
        userID: currentUser.uid,
        userEmail: currentUser.email,
        timeStamp: serverTimestamp(),
      });
    }

   
  };

  const handleTacketFormChange = (event) => {
    const { name, value, type, checked } = event.target;

    setTicketFormData((prevFromData) => {
      return {
        ...prevFromData,
        // [event.target.name] : event.target.value
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  return (
    <div className="body__form">
      <form className="main__form">
        <div className="form__error">{showError}</div>
        <div className="form__title">Ticket Form</div>
        <div className="form__item">
          <label className="form__label">Select Departure and Destination Area and Date for Traveling </label>
          <div className="form__select">
            <select
              name="departure"
              id="departure"
              value={ticketFormData.departure}
              onChange={handleTacketFormChange}
              className="select__departure form__input__select"
            >
              <option value="">Place of departure</option>
              <option value={kumasi}>Kumasi</option>
              <option value={sunyani}>Sunyani</option>
              <option value={techiman}>Techiman</option>
              <option value={goaso}>Goaso</option>
              <option value={capeCoast}>Cape Coast</option>
              <option value={koforidua}>Koforidua</option>
              <option value={accra}>Accra</option>
              <option value={tamale}>Tamale</option>
              <option value={damongo}>Damongo</option>
              <option value={nalerigu}>Nalerigu</option>
              <option value={bolgatanga}>Bolgatanga</option>
              <option value={waT}>Wa</option>
              <option value={hoT}>Ho</option>
              <option value={dambai}>Dambai</option>
              <option value={takoradi}>Takoradi</option>
              <option value={wiawso}>Wiawso</option>
            </select>
            <select
              name="destination"
              id="destination"
              value={ticketFormData.destination}
              onChange={handleTacketFormChange}
              className="select__destination form__input__select"
            >
              <option value="">Place of destination</option>
              <option value={kumasi}>Kumasi</option>
              <option value={sunyani}>Sunyani</option>
              <option value={techiman}>Techiman</option>
              <option value={goaso}>Goaso</option>
              <option value={capeCoast}>Cape Coast</option>
              <option value={koforidua}>Koforidua</option>
              <option value={accra}>Accra</option>
              <option value={tamale}>Tamale</option>
              <option value={damongo}>Damongo</option>
              <option value={nalerigu}>Nalerigu</option>
              <option value={bolgatanga}>Bolgatanga</option>
              <option value={waT}>Wa</option>
              <option value={hoT}>Ho</option>
              <option value={dambai}>Dambai</option>
              <option value={takoradi}>Takoradi</option>
              <option value={wiawso}>Wiawso</option>
            </select>
            <input
              className="input__date form__input__select"
              type="date"
              name="date"
              value={ticketFormData.date}
              onChange={handleTacketFormChange}
              required true
            />
          </div>
          <div className="form__name">
            <label className="form__label" htmlFor="firstName">
              Please Enter Your First Name
            </label>
            <input
              className="form__input"
              id="firstName"
              type="text"
              name="firstName"
              value={ticketFormData.firstName}
              onChange={handleTacketFormChange}
              placeholder="First Name"
              required
            />
            <label className="form__label" htmlFor="lastName">
              Please Enter Your Last Name
            </label>
            <input
              className="form__input"
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={ticketFormData.lastName}
              onChange={handleTacketFormChange}
              required
            />
          </div>
          <div className="form__Phone__number">
            <label className="form__label" htmlFor="phoneNumber">
              Please Enter Your Phone Number
            </label>
            <input
              className="form__input"
              id="phoneNumber"
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={ticketFormData.phoneNumber}
              onChange={handleTacketFormChange}
              required
            />
          </div>
          <div>
            <fieldset className="form__fieldset">
              <legend>Take of Time</legend>
              <input
                type="radio"
                id="morning"
                name="timing"
                value="Morning at 10:30 am"
                checked={ticketFormData.timing === "Morning at 10:30 am"}
                onChange={handleTacketFormChange}
                required
              />
              <label htmlFor="morning">Morning at 10:30 am</label>
              <br />
              <input
                type="radio"
                id="evening"
                name="timing"
                value="Evening at 8:30 pm"
                checked={ticketFormData.timing === "Evening at 8:30 pm"}
                onChange={handleTacketFormChange}
                required true
              />
              <label htmlFor="evening">Evening at 8:30 pm</label>
            </fieldset>
          </div>
          <div className="form__number__of__ticket">
            <label className="form__label" htmlFor="ticketAmount">
              Please Enter Number OF Ticket Needed
            </label>
            <input
              className="form__input"
              min="1"
              max="5"
              type="number"
              name="ticketAmount"
              id="ticketAmount"
              placeholder="Enter Number OF Ticket (Max of 5)"
              value={ticketFormData.ticketAmount}
              onChange={handleTacketFormChange}
              required true
            />
          </div>
          <div className="form__total__amount"> Your Ticket Cost GH{totalAmount}</div>
          <button className="form__btn" type="submit" onClick={addOn}>Make Payment GH{totalAmount}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
