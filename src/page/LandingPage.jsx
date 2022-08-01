import React from 'react'
import AreaOfService from '../components/AreaOfService'
import GetTicket from '../components/GetTicket'
import NavigationBar from '../components/Navbar/NavigationBar'
import ProvidingService from '../components/ProvidingService'


const LandingPage = () => {
  return (
    <div className='main__body'>
        <NavigationBar/>
        <GetTicket/>
        <ProvidingService/>
        <AreaOfService/>

    </div>
  )
}

export default LandingPage