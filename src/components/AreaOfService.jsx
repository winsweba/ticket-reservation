import React from 'react'
import './ComponentStyle.css'
import Image from "../Images/station.jpg"


const AreaOfService = () => {
  return (
    <div>
       <section class="box box-c bg-secondary grid-col-2 grid-reversed">
       <img src={Image} alt="" />
      <div class="box-text">
        <h2 class="text-xl">We work across the country </h2>
        <p class="text-md">
          Treat yourself to a festive Sugar Plum Cheese Danish with a nicely
          spiced sugar-plum spread.
        </p>
        <a href="#" class="btn btn-light-outline">Order Ticket Now </a>
      </div>
    </section>
    <footer class="footer">
      <div class="footer-container">
        <p>© 2021 Starbucks Coffee Company. All rights reserved.</p>
      </div>
    </footer>
  </div>
  )
}

export default AreaOfService