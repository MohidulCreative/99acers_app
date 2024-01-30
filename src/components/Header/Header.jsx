import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className="w-full fixed left-0 top-0 z-50 bg-black flex justify-between items-center mx-auto px-8 py-2 text-white">
            <Link className='text-xl' to="/"><img className=' h-12' src="/logo2.png" alt="" /></Link>
            <div className='bg-[crimson] p-2 flex justify-center items-center rounded-full'>
                <Link to="/profile" className='text-xs font-semibold text-white'>VIP-0</Link>
            </div>
        </div>
    </>
  )
}

export default Header