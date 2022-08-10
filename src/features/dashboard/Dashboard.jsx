import React from 'react'
import Footer from '../components/footer/Footer'
import Navigation from '../components/nav/Navigation'
import Routers from '../routers/Routers'

function Dashboard() {
  return (<div className='dashboard'>
        <Navigation/>
        <Routers/>
        <Footer/>
    </div>
  )
}

export default Dashboard