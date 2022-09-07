import React from "react";
import "./Navbar.css";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";


const NavigationBar = () => {
  let navigate = useNavigate();
  
 const { logout  } = useAuth();

 const handelLogOut = async ()=> {

  try {
    await logout()
    // navigate("/")
  } catch {
    // setError("Failed to log out")
  }
}

  return (
    <div>
      <div className="nave">
        <div className="nav-title">Ticket App</div>
        <div className="nave-list">
          {/* <div className='nav-popular' >Popular</div> */}
          {/* <div className='nav-tv' >TV </div> */}
          <Link to={'/ticket-booking'} className="nav-booking">Bookings </Link>
          <Link to={'/help'} className="nav-help">Help </Link>
          <button onClick={handelLogOut} className="search-btn">Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
