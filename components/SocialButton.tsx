import { State } from '@/helper/types';
import React, { useState , useRef } from 'react'
import { IconType } from 'react-icons/lib'
import { useSelector } from 'react-redux'

interface Props {
    item: {
        Icon: IconType;
        name: string;
        link: string;
    }
}

const SocialButton = ({ item }: Props) => {

    const fontSize = useSelector((state: State) => state.theme.fontSize)
    const color = useSelector((state: State) => state.theme.color)
    
    const [isEnter, setIsEnter] = useState(false)
    const ref = useRef(null) as any

    return (
        <a href={item.link} target='_blank'>
            <button onMouseEnter={() => setIsEnter(true)} onMouseLeave={() => setIsEnter(false)} className='flex items-center justify-center gap-2 hover:gap-4 text-white p-3 rounded-full hover:-translate-y-1 duration-300 cursor-pointer hover:scale-105' style={{ background: color }}>
                <item.Icon fontSize={fontSize.xxxl} className='-mr-2' />
                <div style={{width: isEnter ? ref.current?.offsetWidth || 0 : 0}} className='overflow-x-hidden transition-all duration-300 ease-out'>
                    <span ref={ref} style={{ fontSize: fontSize.base }}>{item.name}</span>
                </div>
            </button>
        </a>
    )
}

export default SocialButton