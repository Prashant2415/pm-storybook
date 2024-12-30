import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Outlet} from "react-router-dom"
import SideBar from './SideBar'
import "./Layout.css"
const PublicHomePage = () => {
  return (
    <div>
      <Header/>
      <div className="main-container">
      <SideBar/>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default PublicHomePage
