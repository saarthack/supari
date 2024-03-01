import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/Context'
import ButtonSection from './ButtonSection'



const RenderTask = (props) => {

  const [supariData, setSupariData] = useContext(UserContext)

  const [showTask, setShowTask] = useState(props.data)
  const [flag, setFlag] = useState(true)
  const [selectedId, setSelectedId] = useState(null);
  const [isHidden, setIsHidden] = useState(false);
  // const copyTaskNotShow = [...props.data]
  const highLight = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));

    if (selectedId === null) {
      // setShowTask(copyTaskShow)
      setFlag(false)

      // console.log(showTask)
    } else {
      // setShowTask(copyTaskNotShow)
      setFlag(true)
    }
  }

  const acceptingTask = (id) => {
    const updateTask = supariData.map(function (elem) {
      if (elem._id.$oid == id) {
        elem.status = 'accepted'
        return elem

      } else {
        return elem
      }
    })
    setSupariData(updateTask)
  }

  
  const completingTask = (id) => {
    const updateTask = supariData.map(function (elem) {

      if (elem._id.$oid == id) {
        const currentDateTime = new Date().toLocaleDateString().split('/').join('-')
        elem.status = 'completed'
        
        return {
          ...elem,
          completedOn: {
            $date: currentDateTime
          }
        }

      } else {
        return elem
      }
    })
    // console.log(updateTask)
    setSupariData(updateTask)
  }

  const [userReview, setUserReview] = useState("")
  const reviewTask = (id)=>{
    setUserReview("")
    const updateTask = supariData.map(function (elem) {
      if (elem._id.$oid == id) {
        elem.status = 'review'

        return elem

      } else {
        return elem
      }
    })

    setSupariData(updateTask)
  }


  
  const failingTask = (id) => {
    const updateTask = supariData.map(function (elem) {


      if (elem._id.$oid == id) {
        elem.status = 'failed'

        return elem

      } else {
        return elem
      }
    })

    setSupariData(updateTask)
  }



  let showingTask = <h2 className='text-center mt-5 text-gray-700'>No Task Available</h2>
  if (showTask.length > 0) {
    showingTask = showTask.map(function (elem, indx) {

      return <div key={elem._id.$oid} className={`bg-[#DE6840] shadow-[inset 0 2px 4px 0 rgba(250, 0, 0, 0.05)] border-white border-2 overflow-y-hidden relative rounded-2xl px-4 py-3 pb-16 mb-[-14%] ${selectedId !== elem._id.$oid && selectedId !== null ? 'gayab' : 'selected'}`}>

        <div className={``} onClick={(e) => {
          highLight(elem._id.$oid)
        }}  >
          <div className='flex justify-between items-center mb-3'>
            <h5 className={`px-2 py-[3px]  text-sm font-semibold rounded-md ${elem.priority == "high" ? 'bg-[#df2f2f]' : 'bg-[#55cf51]'} `}>{elem.priority}</h5>
            <h4 className='text-xs font-bold'>{elem.createdAt.$date.split("T")[0]}</h4>
          </div>
          <h1 className='font-bold text-xl mb-3 leading-6'>{elem.title}</h1>
          <p className='font-medium text-sm leading-4'>{elem.description}</p>
        </div>
        <ButtonSection flag={flag} review={[userReview,setUserReview]} reviewTask={reviewTask} elem={elem} acceptingTask={acceptingTask} completingTask={completingTask} failingTask={failingTask} />
      </div>
    })
  }
  return (
    <div className='p-5 h-[50vh] overflow-y-auto'>
      {showingTask}
    </div>
  )
}

export default RenderTask