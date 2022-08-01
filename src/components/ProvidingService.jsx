import React from 'react'
import './ComponentStyle.css'
import Image from "../Images/busstation.jpg"


const ProvidingService = () => {
  return (
    <div>  
    <section class="box box-b bg-secondary grid-col-2">
      <img src={Image} alt="" />
      <div class="box-text">
        <h2 class="text-xl">We Promise To Deliver</h2>
        <p class="text-md">
          write about safety information, and what you can Deliver 
        </p>
        <a href="#" class="btn btn-light-outline">Order Ticket Now </a>
      </div>
    </section>
  </div>
  )
}

export default ProvidingService