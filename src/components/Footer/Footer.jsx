import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <nav className="navbar">
        <Link to="/"> <i className="fas fa-home"></i> <span>home</span> </Link>
        <Link to="care"> <i className="fas fa-blog"></i> <span>care</span> </Link>
        <Link to="plan/new plan"> <i className="fas fa-briefcase"></i> <span>plan</span> </Link>
        <Link to="account"> <i className="fas fa-user"></i> <span>me</span> </Link>
    </nav>
    </>
  )
}

export default Footer