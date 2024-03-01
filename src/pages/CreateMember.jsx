import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import { useNavigate } from 'react-router-dom';


import { MemberContext } from '../Context/Context'

const CreateMember = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [memberDesignation, setMemberDesignation] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [users, setUsers] = useContext(MemberContext)
  const navigate = useNavigate();

  const memberSubmitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const newMember = {name,email,memberDesignation,password}

    const copyMembers = [...users]
    copyMembers.push(newMember)
    console.log(copyMembers)
    // console.log(newMember)
    // setUsers(...users,newMember)

    // console.log(users)
    setUsers(copyMembers)
    // console.log("Hello")
    setName("")
    setEmail("")
    setMemberDesignation("")
    setPassword("")
    setConfirmPassword("")

    navigate('/');
  }

  return (
    <div>
      <div className='p-5 pt-12'>
        <h1 className='font-semibold text-3xl'><Link to="/"><i className="ri-arrow-left-circle-line font-extralight"></i></Link> Create Member</h1>

        <form className='mt-16' onSubmit={memberSubmitHandler}>
          <input required value={name} onChange={(e)=>{
            setName(e.target.value)
          }} className='w-full px-4 py-1 pb-1.5 rounded-full border-2 outline-none mb-5 border-[#ce3b53af] bg-transparent placeholder:text-sm placeholder:font-medium placeholder:text-gray-500 font-semibold text-base' type="text" placeholder='Name' />
          <input required value={email} onChange={(e)=>{
            setEmail(e.target.value)
          }}  className='w-full px-4 py-1 pb-1.5 rounded-full border-2 outline-none mb-5 border-[#ce3b53af] bg-transparent placeholder:text-sm placeholder:font-medium placeholder:text-gray-500 font-semibold text-base' type="email" placeholder='Email' />
          <select defaultValue="1" className='w-full px-4 py-1 pb-1.5 rounded-full border-2 outline-none mb-5 border-[#ce3b53af] bg-transparent placeholder:text-sm placeholder:font-medium placeholder:text-gray-500 font-semibold text-base' name="" id="">
            <option value="0">Admin</option>
            <option value="1">Member</option>
          </select>
          <input value={memberDesignation} onChange={(e)=>{
            setMemberDesignation(e.target.value)
          }}  type="text" className='w-full px-4 py-1 pb-1.5 rounded-full border-2 outline-none mb-5 border-[#ce3b53af] bg-transparent placeholder:text-sm placeholder:font-medium placeholder:text-gray-500 font-semibold text-base' placeholder='Designation' />
          <input value={password} onChange={(e)=>{
            setPassword(e.target.value)
          }}  type="password" className='w-full px-4 py-1 pb-1.5 rounded-full border-2 outline-none mb-5 border-[#ce3b53af] bg-transparent placeholder:text-sm placeholder:font-medium placeholder:text-gray-500 font-semibold text-base' placeholder='Password' />
          <input value={confirmPassword} onChange={(e)=>{
            setConfirmPassword(e.target.value)
          }}  type="password" className='w-full px-4 py-1 pb-1.5 rounded-full border-2 outline-none mb-5 border-[#ce3b53af] bg-transparent placeholder:text-sm placeholder:font-medium placeholder:text-gray-500 font-semibold text-base' placeholder='Confirm Password' />
          <button className='bg-[#ce3b53af] w-full p-3 text-lg font-semibold rounded-full'>Create Member</button>
        </form>
      </div>
    </div>
  )
}

export default CreateMember