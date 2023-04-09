import React from 'react'
import { FiCheck } from 'react-icons/fi'

const BackgroundBox = ({color , text , bgColor , selected}) => {
  return (
    <div className='w-[32%] h-16 border-2 flex items-center justify-center cursor-pointer' style={{background:bgColor , borderColor:color}}>
        <div className='flex justify-between items-center gap-8'>
            <div className='w-5 h-5 rounded-full border -ml-2 flex items-center justify-center' style={{backgroundColor:selected ? color: 'none', borderColor:color}}>
            {selected && <FiCheck className='text-base text-white'/>}
        </div>
        <div className='text-sm font-bold' style={{color:color}}>
            {text}
        </div>
    </div>
    </div>
  )
}

export default BackgroundBox