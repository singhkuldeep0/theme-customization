import { setBackground } from '@/features/theme'
import React from 'react'
import { FiCheck } from 'react-icons/fi'
import { useDispatch , useSelector } from 'react-redux'

const BackgroundBox = ({textcolor , mode , bgColor , selected , setMode, backgroundColor}) => {
  
  const dispatch = useDispatch()
  
  const handleMode = ()=>{
    dispatch(setBackground(bgColor))
    setMode(mode)
  }

  const color = useSelector(state => state.theme.color)

  return (
    <div onClick={handleMode} className='w-[32%] h-16 border-2 flex items-center justify-center cursor-pointer' style={{background:backgroundColor , borderColor:selected ? color : textcolor}}>
        <div className='flex justify-between items-center gap-8'>
            <div className='w-5 h-5 rounded-full border -ml-2 flex items-center justify-center' style={{backgroundColor:selected ? color: 'transparent', borderColor:selected ? color : textcolor}}>
            {selected && <FiCheck className='text-base text-white'/>}
        </div>
        <div className='text-sm font-bold' style={{color:selected ? color : textcolor}}>
            {mode}
        </div>
    </div>
    </div>
  )
}

export default BackgroundBox