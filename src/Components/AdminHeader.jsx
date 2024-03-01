import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'
import { AuthContext } from '../Context/Context';

const AdminHeader = (props) => {
    const fullref = useRef(null)
    const [isOpen, setIsOpen] = useState(false);

    const toggleFullNav = ()=>{
        setIsOpen(!isOpen);
    }

    const {logoutUser} = useContext(AuthContext)
  return (
    <>
    <div className='flex justify-between items-start py-5 pt-14 px-4'>
        <div >
        <h4 className='text-xl'>Hello,</h4>
        <h2 className='text-3xl font-semibold leading-5'>Harsh 👋</h2>
        </div>
        <h3 onClick={toggleFullNav} className=' relative z-10'>
            {isOpen?<i className="ri-close-line text-2xl font-extrabold"></i>:<i className="ri-menu-3-fill text-2xl font-extrabold"></i>}
        </h3>
    </div>
    <div ref={fullref}
        className={`fixed p-14 top-0 flex flex-col justify-between right-0 h-full w-full bg-black text-white transition-transform transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        >
           <div className='mt-16'>
           <Link className='font-semibold text-3xl block mb-2' to="/createMember">Create Member</Link>
            <Link className='font-semibold text-3xl block mb-4' to="/createTask">Create Task</Link>
           </div>
        <button className='bg-[#df2f2f] text-white w-full py-1.5 rounded font-semibold' onClick={()=>{
          logoutUser()
        }}>Log Out</button>
    </div>  
    </>
  )
}

export default AdminHeader