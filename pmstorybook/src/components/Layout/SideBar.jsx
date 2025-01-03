import React from 'react'
import { Link } from 'react-router-dom'
import { Heading } from '../commonComponents/Common'

const SideBar = () => {
  return (
    <div className='sidebar-container'>
      <Heading heading="Components"/>
      <div className="link-container">
        <ul>
          <li><Link to="/textGenerator" className="link">Text Generator</Link></li>
          <li><Link to="/testimonial" className="link">Testimonial</Link></li>
          <li><Link to="/filter" className="link">Filter</Link></li>
          
        </ul>
      </div>
    </div>
  )
}

export default SideBar
