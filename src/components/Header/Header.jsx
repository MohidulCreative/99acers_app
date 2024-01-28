import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className="w-full fixed left-0 top-0 z-50 bg-black flex justify-between items-center mx-auto px-8 py-2 text-white">
            <Link className='text-2xl text-[crimson]' to="/">99acers</Link>
            <div className='bg-gray-400 p-2 h-8 w-8 flex justify-center items-center rounded-full'>
                <Link to="/profile" className='text-xl font-bold text-[crimson]'>v<sub className='text-[12px] p-0 ml-[-2px]'>0</sub></Link>
            </div>
        </div>
    </>
  )
}

export default Header