import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Registration from "./page/Registration/Registration";
import LandingPage from "./page/LandingPage";
import TicketFrom from "./page/TicketFrom/TicketFrom";
import { AuthProvider } from "./context/AuthContext";
import BookingPage from "./page/Booking/BookingPage";
import HelpPage from "./page/HelpPage";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { currentUser } = useAuth();

  // const {currentUser} = useContext(useAuth)

  useEffect(() => {
    console.log(currentUser)
  }, [])
  

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to={"/register"} />;
  };
  return (
    
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <LandingPage />
            </RequireAuth>
          }
        />
        <Route
          path="/ticket-form"
          element={
            <RequireAuth>
              <TicketFrom />
             </RequireAuth> 
          }
        />
        <Route
          path="/ticket-booking"
          element={
            <RequireAuth>
              <BookingPage />
            </RequireAuth>
          }
        />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
    
  );
};

export default App;
