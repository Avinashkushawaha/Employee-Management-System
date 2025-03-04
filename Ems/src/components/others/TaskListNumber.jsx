import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex mt-10 jusify-between gap-5 screen'>
    <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400'> 
    <h2 className='text-3xl font-bold'>0</h2>
    <h3 className='text-xl mt-0.5 font-medium'>New Task</h3>
    </div>
    <div className='rounded-xl py-6 px-9 w-[45%] bg-blue-400'> 
    <h2 className='text-3xl font-bold'>0</h2>
    <h3 className='text-xl mt-0.5 font-medium'>New Task</h3>
    </div>
    <div className='rounded-xl py-6 px-9 w-[45%] bg-green-400'> 
    <h2 className='text-3xl font-bold'>0</h2>
    <h3 className='text-xl mt-0.5 font-medium'>New Task</h3>
    </div>
    <div className='rounded-xl py-6 px-9 w-[45%] bg-yellow-400'> 
    <h2 className='text-3xl font-bold'>0</h2>
    <h3 className='text-xl mt-0.5 font-medium'>New Task</h3>
    </div>
    </div>
  )
}

export default TaskListNumber