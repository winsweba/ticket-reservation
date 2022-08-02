import React from 'react'
import { Link } from 'react-router-dom'
import './ComponentStyle.css'

const GetTicket = () => {
  return (
    <div>
      <section className="box box-a bg-primary text-center py-md">
      <div className="box-inner">
        <h2 className="text-xl">the fastest way to get a ticket. Do not forget to order</h2>
        <p className="btn btn-dark">
          <Link to={"/ticket-form"}>Get Ticket Now </Link>
        </p>
      </div>
    </section>
    </div>
  )
}

export default GetTicket