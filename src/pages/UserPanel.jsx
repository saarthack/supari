import React from 'react'
import Header from '../Components/Header'
import Links from '../Components/Links'
import TaskData from '../Components/TaskData'
import MainTask from '../Components/MainTask'


const UserPanel = (props) => { 
    
    return (
        <>
            <Header logOut={props.logOut} loggedInUser={props.loggedInUser} />
            
            <MainTask />
        </>
    )
}

export default UserPanel