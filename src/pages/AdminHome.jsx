import React from 'react'
import RecentTask from '../Components/RecentTask'
import SearchUser from '../Components/SearchUser'
import { Link } from 'react-router-dom'
import AdminHeader from '../Components/AdminHeader'

const AdminHome = () => {
    return (
        <div>
            <AdminHeader />
            <RecentTask />
            <SearchUser />
            <div className='p-5'>
                <Link to="/createTask" className='bg-[#0064D6] w-full block text-center py-3 text-lg font-semibold text-white rounded-lg'>Create New Task</Link>
            </div>
        </div>
    )
}

export default AdminHome