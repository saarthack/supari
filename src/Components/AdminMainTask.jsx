import React from 'react'
import AdminHeader from './AdminHeader'
import RecentTask from './RecentTask'
import SearchUser from './SearchUser'
import { Link, Route, Routes } from 'react-router-dom'
import CreateMember from '../pages/CreateMember'
import CreateTask from '../pages/CreateTask'
import AdminHome from '../pages/AdminHome'

const AdminMainTask = (props) => {
    return (
        <div>
            
            <Routes>
                <Route path='/' element={<AdminHome />} />
                <Route path='/createMember' element={<CreateMember />} />
                <Route path='/createTask' element={<CreateTask />} />
            </Routes>

        </div>
    )
}

export default AdminMainTask