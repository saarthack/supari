import React, { useContext, useEffect, useState } from 'react'
import UserPanel from './UserPanel';
import AdminPanel from './AdminPanel';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Context';
// import { LoggedInContext, MemberContext } from '../Context/Context';

const LogIn = () => {

    const [loggedInUser, setLoggedInUser] = useState({})

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState('');
    const [currentPanel, setcurrentPanel] = useState('')
    const { loginUser } = useContext(AuthContext);

    const submitHandler = (e) => {
        e.preventDefault()
        const userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : [];
        const adminData = localStorage.getItem('adminData') ? JSON.parse(localStorage.getItem('adminData')) : [];

        const user = userData.find(u => u.email === email && u.password === password);
        const admin = adminData.find(u => u.email === email && u.password === password);
        setLoggedInUser(user)



        if (admin) {
            setcurrentPanel('admin')
            loginUser(email);
        } else {
            if (user) {
                setcurrentPanel('user')
                loginUser(email);
            } else {
                setError('Invalid email or password');
            }
        }

        setEmail("")
        setPassword("")

    }


    // console.log(isAdmin)


    
    return (
        <>
            {currentPanel === '' ? (
                <div className='p-5 bg-[#1c1c1c] pt-12'>
                    <h2 className='font-extrabold text-2xl'>Log In</h2>
                    <div className=' h-[70vh] flex items-center justify-center '>
                        <form onSubmit={submitHandler} className='flex flex-col w-full'>
                            <input value={email} onChange={(e) => {
                                setEmail(e.target.value)
                            }} placeholder='Email' className='rounded-full mb-3 py-1.5 pb-2 placeholder:text-sm placeholder:font-bold px-5 bg-transparent outline-none border-2 border-[#ce3b53af]' type="email" required />
                            <input value={password} onChange={(e) => {
                                setPassword(e.target.value)
                            }} placeholder='Password' className='rounded-full mb-3 py-1.5 pb-2 placeholder:text-sm placeholder:font-bold px-5 bg-transparent outline-none border-2 border-[#ce3b53af]' type="password" required />
                            <button className='bg-[#ce3b53af] outline-red-700 font-bold text-xl py-3 rounded-full mt-6'>Log In</button>
                            {error && <p className='text-red-700 font-meduim text-center mt-2'>{error}</p>}
                        </form>
                    </div>
                </div>
            ) : (
                <div>
                    {currentPanel === 'admin' ? (
                        <AdminPanel logOut={logOut}  />
                    ) : (
                        <UserPanel logOut={logOut} loggedInUser={loggedInUser} />
                    )}
                </div>
            )

            }
        </>
    )
}

export default LogIn



