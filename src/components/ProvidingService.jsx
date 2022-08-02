import React from 'react'
import './ComponentStyle.css'
import Image from "../Images/busstation.jpg"
import { Link } from 'react-router-dom'


const ProvidingService = () => {
  return (
    <div>  
    <section className="box box-b bg-secondary grid-col-2">
      <img src={Image} alt="" />
      <div className="box-text">
        <h2 className="text-xl">We Promise To Deliver</h2>
        <p className="text-md">
          write about safety information, and what you can Deliver 
        </p>
        <Link to={"/ticket-form"} className="btn btn-light-outline">Order Ticket Now </Link>
      </div>
    </section>
  </div>
  )
}

export default ProvidingService