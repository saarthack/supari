import React, { useState } from 'react'

const ButtonSection = (props) => {
// console.log(props.elem.completedOn)

const [toggle, setToggle] = useState(false)

const reviewToggle = ()=>{
  if(!toggle){
    setToggle(true)
  }else{
    setToggle(false)
  }
}


// console.log(props.review)
  return (
    <div>
      <div className={`${props.flag ? 'hidden' : 'block'}`}>
        <div className={`flex gap-2 mt-4 ${props.elem.status == "new" ? 'block' : 'hidden'}`}>
          <button onClick={() => {
            props.acceptingTask(props.elem._id.$oid)
          }} className='text-sm bg-[#0064D6] px-3 py-0.5 rounded font-semibold'>{props.elem.status == "new" ? 'Accept' : 'Accepted'}</button>
          <button  onClick={() => {
            reviewToggle()
          }}  className='text-sm bg-[#df2f2f] px-3 py-0.5 rounded font-semibold'>Review</button>
          <button className='text-sm bg-[#000] px-3 py-0.5 rounded font-semibold'>Change Deadline</button>
        </div>
        <div className={`mt-3 ${toggle ? 'block' : 'hidden'}`}>
            <input value={props.review[0]} onChange={(e)=>{
              props.review[1](e.target.value)
            }} placeholder='write review here' className='placeholder:text-xs placeholder:font-medium w-full text-sm rounded px-2 text-black py-0.5 pb-5 font-semibold outline-none' type="text" />
            <button onClick={()=>{
              props.reviewTask(props.elem._id.$oid)
              
              setToggle(false)
              }} className='bg-[#55cf51] text-base font-bold rounded text-center w-full mt-2 p-0.5'>Submit review</button>
        </div>
        <div className={`flex gap-2 mt-4 ${props.elem.status == "accepted" ? 'block' : 'hidden'} `}>
          <button onClick={() => {
            props.completingTask(props.elem._id.$oid)
          }} className='text-xs bg-[#55cf51] px-4 py-1.5 rounded font-bold'>Mark as Completed</button>
          <button onClick={() => {
            props.failingTask(props.elem._id.$oid)
          }} className='text-xs bg-[#df2f2f] px-4 py-1.5 rounded font-bold'>Mark as Failed</button>
        </div>
        <div className={`flex gap-2 mt-4 ${props.elem.status == "completed" ? 'block' : 'hidden'} `}>
          <button className='text-base w-full text-black bg-[#55cf51] px-4 py-1 rounded-md font-bold'>Completed {props.elem.status == 'completed' && props.elem.completedOn != undefined ? `on - ${props.elem.completedOn.$date.split("T")[0]}` : ''}</button>
        </div>
        <div className={`flex flex-col gap-2 mt-4 ${props.elem.status == "review" ? 'block' : 'hidden'} `}>
          <button className='text-center w-full text-gray-800 text-sm py-1 rounded font-bold bg-yellow-500'>in review</button>

        </div>
        <div className={`flex gap-2 mt-4 ${props.elem.status == "failed" ? 'block' : 'hidden'} `}>
          <button className='border-2 border-black text-base w-full text-black bg-[#df2f2f] px-4 py-1 rounded-md font-bold'>Failed</button>
        </div>
        <div className='my-4 text-sm text-black border-red-700 border w-fit px-2 py-[2px] rounded font-bold'>Deadline : <span>{props.elem.createdAt.$date.split("T")[0]}</span></div>
      </div>
    </div>
  )
}

export default ButtonSection

