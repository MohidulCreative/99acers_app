import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className="container fixed left-0 top-0 bg-black flex justify-between items-center mx-auto px-8 py-2 text-white">
            <Link to="/">99acers</Link>
            <div className='bg-gray-400 p-2 rounded-full'>
                <Link to="/profile">me</Link>
            </div>
        </div>
    </>
  )
}

export default Header