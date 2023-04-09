import React from 'react'
import { FiCheck } from 'react-icons/fi'

const Color = ({color , selected}) => {
  return (
    <div style={{background:color}}  className='h-10 w-10 rounded-full flex items-center justify-center cursor-pointer'>
        <FiCheck className='text-2xl text-white'/>
    </div>
  )
}

export default Color