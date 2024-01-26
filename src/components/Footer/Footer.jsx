import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <nav className="navbar">
        <Link to="about"> <i className="fas fa-address-book"></i> <span>about</span> </Link>
        <Link to="care"> <i className="fas fa-blog"></i> <span>care</span> </Link>
        <Link to="plan"> <i className="fas fa-briefcase"></i> <span>plan</span> </Link>
        <Link to="account"> <i className="fas fa-user"></i> <span>me</span> </Link>
    </nav>
    </>
  )
}

export default Footer