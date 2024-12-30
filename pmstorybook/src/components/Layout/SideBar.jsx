import React from 'react'
import { Link } from 'react-router-dom'
import { Heading } from '../commonComponents/Common'

const SideBar = () => {
  return (
    <div className='sidebar-container'>
      <Heading heading="Components"/>
      <div className="link-container">
        <Link to="/textGenerator" className="link">Text Generator</Link>
      </div>
    </div>
  )
}

export default SideBar
