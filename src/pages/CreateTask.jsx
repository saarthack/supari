import React from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'


const CreateTask = () => {

  const taskSubmitHandler = (e)=>{
    e.preventDefault()
    
  }


  return (
    <div className='p-5 pt-10'>
      <h1 className='font-semibold text-3xl'><Link to="/"><i className="ri-arrow-left-circle-line font-extralight"></i></Link> Create Task</h1>
      <form className='mt-10' onSubmit={taskSubmitHandler}>
        <h5 className='text-base font-medium text-white opacity-60 mb-2'>Task Title</h5>
        <input className='w-full mb-6 px-4 pt-1.5 pb-2 rounded-lg bg-[#313131] placeholder:text-sm font-bold outline-none placeholder:font-light placeholder:text-white placeholder:opacity-30' type="text" placeholder='Make a UI design' />

        <h5 className='text-base font-medium text-white opacity-60 mb-2 '>Description</h5>
        <textarea rows='3.5' className='w-full mb-6 px-4 pt-1.5 pb-2 rounded-lg bg-[#313131] placeholder:text-sm font-bold outline-none placeholder:font-light placeholder:text-white placeholder:opacity-30' name="" id="" placeholder='Detailed Desciption of Task (Max 500 words)'></textarea>

        <h5 className=' text-base font-medium text-white opacity-60 mb-2 '>Priority</h5>
        <div className='flex gap-2 mb-6'>
          <div className="low">
            <input className="priorityType hidden" id="low" type="radio" value="1" name="priority"/>
            <label htmlFor="low" className='text-xs px-3 py-[2px] pb-[3px] rounded-md border-green-600 font-medium text-green-600 border-2'>Low</label>
          </div>
          <div className="medium">
            <input className="priorityType hidden" id="medium" type="radio" value="2" name="priority"/>
            <label htmlFor="medium" className='text-xs px-3 py-[2px] pb-[3px] rounded-md border-yellow-400 font-medium text-yellow-400 border-2'>Medium</label>
          </div>
          <div className="high">
            <input className="priorityType hidden" id="high" type="radio" value="3" name="priority"/>
            <label htmlFor="high" className='text-xs px-3 py-[2px] pb-[3px] rounded-md border-red-600 font-medium text-red-600 border-2'>High</label>
          </div>
        </div>

        <h5 className=' text-base font-medium text-white opacity-60 mb-2 '>Date</h5>
        <div className='flex justify-between items-center mb-5'>
          <input type="date" className='px-4 pt-2 pb-[9px] rounded-lg bg-[#313131] placeholder:text-sm text-sm font-normal outline-none placeholder:font-light placeholder:text-white placeholder:opacity-30' />
          <h6 className='font-semibold text-sm'>to</h6>
          <input type="date" className='px-4 pt-2 pb-[9px] rounded-lg bg-[#313131] placeholder:text-sm text-sm font-normal outline-none placeholder:font-light placeholder:text-white placeholder:opacity-30' />
        </div>

        <h5 className=' text-base font-medium text-white opacity-60 mb-2 '>Assign to</h5>
        <input className='w-full mb-6 px-4 pt-1.5 pb-2 rounded-lg bg-[#313131] placeholder:text-sm font-bold outline-none placeholder:font-light placeholder:text-white placeholder:opacity-30' type="text" />
        <div></div>

        <h5 className=' text-base font-medium text-white opacity-60 mb-2 '>Category</h5>
        <input className='w-full mb-6 px-4 pt-1.5 pb-2 rounded-lg bg-[#313131] placeholder:text-sm font-bold outline-none placeholder:font-light placeholder:text-white placeholder:opacity-30' type="text" placeholder='Design, Development, etc...' />

        <h5 className=' text-base font-medium text-white opacity-60 mb-2 '>Tags</h5>
        <input className='w-full mb-7 px-4 pt-1.5 pb-2 rounded-lg bg-[#313131] placeholder:text-sm font-bold outline-none placeholder:font-light placeholder:text-white placeholder:opacity-30' type="text" placeholder='comma seperated tags' />

        <button className='bg-black text-center w-full py-3 rounded-lg font-bold text-lg'>Create Task</button>
      </form>
    </div>
  )
}

export default CreateTask