import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import Style from './Layout.module.css'

const Layout = () => {
  return (
    <>
      <Navbar/>
      <div className={`${Style.outlet} container`}>
      <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default Layout