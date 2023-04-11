import { setColor } from '@/features/theme'
import React from 'react'
import { FiCheck } from 'react-icons/fi'
import { useDispatch } from 'react-redux'

const Color = ({color , selected , setSelected}) => {

  const dispatch = useDispatch()

  const selectColor = ()=>{
    dispatch(setColor(color))
    setSelected(color)
  }

  return (
    <div onClick={selectColor} style={{background:color}}  className='h-10 w-10 rounded-full flex items-center justify-center cursor-pointer'>
      {selected === color &&  <FiCheck className='text-2xl text-white'/>}
    </div>
  )
}

export default Color