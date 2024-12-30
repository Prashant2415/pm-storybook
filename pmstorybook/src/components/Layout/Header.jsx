import React from 'react'
import logo from "../../images/logo.png"
import "./Layout.css"
const Header = () => {
  return (
    <div className='header-container'>
      <img className='logo' src={logo} alt="logo" />
      <p className='header-title'>Storybook</p>
    </div>
  )
}

export default Header
