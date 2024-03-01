import React, { useContext } from 'react'
import Header from './Components/Header'
import Links from './Components/Links'
import TaskData from './Components/TaskData'
import MainTask from './Components/MainTask'
import UserPanel from './pages/UserPanel'
import LogIn from './pages/LogIn'
import { AuthContext } from './Context/Context'
import AdminPanel from './pages/AdminPanel'


const App = () => {

  const { activePerson } = useContext(AuthContext);

  // const userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : [];
  // const adminData = localStorage.getItem('adminData') ? JSON.parse(localStorage.getItem('adminData')) : [];
  // // const user = userData.find(u => u.email === email && u.password === password);
  // // const admin = adminData.find(u => u.email === email && u.password === password);
  // // console.log(user)
  // // const active = localStorage.getItem('adminData') ? JSON.parse(localStorage.getItem('adminData')) : [];

  // // localStorage.clear()
  // // console.log(activePerson)
  return (
    <>
      {activePerson ? (
        activePerson === 'h@h.com' ? (
          <AdminPanel />
        ) : (
          <UserPanel />
        )
      ) : (
        <LogIn />
      )}

    </>
  )
}

export default App