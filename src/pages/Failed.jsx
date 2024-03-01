import React, { useContext, useState } from 'react'
import RenderTask from '../Components/RenderTask'
import { UserContext } from '../Context/Context'
import TaskData from '../Components/TaskData'
import Links from '../Components/Links'

const Failed = () => {
  const [data,setData] = useContext(UserContext)
  const filterData = data.filter(function(elem){


    return elem.status == "failed"
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

export default Failed