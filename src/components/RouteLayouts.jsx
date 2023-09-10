import React from 'react'

import Nav from './layout/Nav'
import Footer from './layout/Footer'
import { Outlet } from 'react-router-dom'
import Customer from './layout/Customer'
import Payment from './layout/Payment'

function RouteLayouts() {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Customer/>
      <Payment/>
      <Footer/>
    </>
  )
}

export default RouteLayouts