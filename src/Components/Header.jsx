import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/Context'

const Header = (props) => {
  const {logoutUser} = useContext(AuthContext)
  return (
    <div className='flex justify-between items-end py-5 pt-10 px-4'>
        <div >
        <h4 className='text-xl'>Hello,</h4>
        <h2 className='text-3xl font-semibold leading-5'>Champ 👋</h2>
        </div>
        <button onClick={()=>{
          logoutUser()
          console.log("Hello")
        }
          
        } className='px-3 py-1 bg-red-600 text-sm text-white rounded font-semibold'>Log Out</button>
        
    </div>
  )
}

export default Header