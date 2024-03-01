import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/Context'
import RenderTask from '../Components/RenderTask'
import TaskData from '../Components/TaskData'
import Links from '../Components/Links'

const NewTask = () => {
  const [data,setData] = useContext(UserContext)
  const filterData = data.filter(function(elem){
    
    return elem.status == "new"
  })
  // console.log(filterData)
  return (
    <div>
      <TaskData />
      <Links />
      <RenderTask data={filterData} />
    </div>
  )
}

export default NewTask