import { useDispatch, useSelector } from 'react-redux'
import Modal from '../components/Modal'
import { Inter, Modak } from 'next/font/google'
import { State } from '@/helper/types'
import { useEffect } from 'react'
import { setFontSize } from '@/features/theme'
import useMediaQuery from '@/hooks/MediaQuery'
import Theme from '@/components/theme'
import Social from '@/components/Social'
import Image from 'next/image'
import { BsGithub } from 'react-icons/bs'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const dispatch = useDispatch()
  const color = useSelector((state:State) => state.theme.color)
  const fontSize = useSelector((state:State) => state.theme.fontSize)
  const background = useSelector((state:State) => state.theme.background)
  const isAboveMediumScreens = useMediaQuery("(min-width:800px)")
  const { fontSize:Font } = Theme()

  useEffect(()=>{
    dispatch(setFontSize(Font[3]))
  } , [isAboveMediumScreens])

  return (
   <main className='relative flex justify-center items-center min-h-screen' style={{ background:background.secondary}}>
    <h1 style={{color:color , fontSize:fontSize.xxl}} className='absolute text-center top-10 font-bold'>Twitter Theme Customization</h1>
    <div className='flex flex-col gap-10 justify-center items-center -mt-36'>
      <div className='relative h-44 w-36 overflow-hidden rounded-full p-4' style={{background:color}}>
    <Image src="https://res.cloudinary.com/cdf/image/upload/v1681234556/img1_loodyu.png" fill alt=""/>
      </div>

    <Modal/>

    <div className='flex items-center gap-4' style={{color:color}}>
       <BsGithub fontSize={fontSize.xxxl}/>
       <a target='_blank' className="footeranim rounded !text-white px-2" href="https://github.com/singhkuldeep0/theme-customization" style={{fontSize:fontSize.xl , backgroundColor:color}} >
          Here is the code
        </a>
      </div>
 
    </div>
    <Social/>
   </main>
  )
}
