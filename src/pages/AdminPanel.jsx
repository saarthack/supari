import React from 'react'
import AdminHeader from '../Components/AdminHeader'
import RecentTask from '../Components/RecentTask'
import SearchUser from '../Components/SearchUser'
import { Link } from 'react-router-dom'
import MainTask from '../Components/MainTask'
import AdminMainTask from '../Components/AdminMainTask'


const AdminPanel = (props) => {

  return (
    <>
      <AdminMainTask logOut={props.logOut} />
    </>
  )
}

export default AdminPanel