import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/Context'
import RenderTask from '../Components/RenderTask'
import TaskData from '../Components/TaskData'
import Links from '../Components/Links'

const Home = () => {
  const [data, setData] = useContext(UserContext)
  return (
    <div>
      <TaskData />
      <Links />

      <RenderTask data={data} />

    </div>
  )
}

export default Home