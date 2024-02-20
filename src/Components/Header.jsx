import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between items-end py-5 pt-10 px-4'>
        <div >
        <h4 className='text-xl'>Hello,</h4>
        <h2 className='text-3xl font-semibold leading-4'>Sarthak 👋</h2>
        </div>
        <button className='px-3 py-1 bg-red-600 text-sm text-white rounded font-semibold'>Log Out</button>

        
    </div>
  )
}

export default Header