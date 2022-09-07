import React from 'react'
import './ComponentStyle.css'
import Image from "../Images/station.jpg"
import { Link } from 'react-router-dom'


const AreaOfService = () => {
  return (
    <div>
       <section className="box box-c bg-secondary grid-col-2 grid-reversed">
       <img src={Image} alt="" />
      <div className="box-text">
        <h2 className="text-xl">We work across the country </h2>
        <p className="text-md">
          Treat yourself to a festive Sugar Plum Cheese Danish with a nicely
          spiced sugar-plum spread.
        </p>
        <Link to={"/ticket-form"} className="btn btn-light-outline">Order Ticket Now </Link>
      </div>
    </section>
    <footer className="footer">
      <div className="footer-container">
        <p>© 2022 Ticket Reservation. All rights reserved.</p>
      </div>
    </footer>
  </div>
  )
}

export default AreaOfService