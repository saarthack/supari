import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/Context'
import RenderTask from '../Components/RenderTask'
import TaskData from '../Components/TaskData'
import Links from '../Components/Links'

const Completed = () => {
  const [data,setData] = useContext(UserContext)

  const filteredData = data.filter(function(elem){

    return elem.status == "completed"
  })
  // console.log(filteredData)
  
  return (
    <div>
      <TaskData />
      <Links />
      <RenderTask data={filteredData} />
    </div>
  )
}

export default Completed